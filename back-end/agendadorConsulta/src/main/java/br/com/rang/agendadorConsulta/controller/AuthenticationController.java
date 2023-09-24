package br.com.rang.agendadorConsulta.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.rang.agendadorConsulta.configuration.infra.security.TokenService;
import br.com.rang.agendadorConsulta.model.User;
import br.com.rang.agendadorConsulta.model.DTO.AuthenticationDTO;
import br.com.rang.agendadorConsulta.model.DTO.LoginResponseDTO;
import br.com.rang.agendadorConsulta.model.DTO.RegisterDTO;
import br.com.rang.agendadorConsulta.model.DTO.RegisterResponseDTO;
import br.com.rang.agendadorConsulta.repository.UserRepository;
import jakarta.validation.Valid;

@RestController
@RequestMapping("auth")
public class AuthenticationController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserRepository repository;
	
	@Autowired
	private TokenService tokenService;
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@Valid @RequestBody AuthenticationDTO data) {
		try {
			UsernamePasswordAuthenticationToken usernamePassword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
			Authentication auth = this.authenticationManager.authenticate(usernamePassword);
			
			String token = tokenService.generatedToken((User)auth.getPrincipal());
			return ResponseEntity.ok(new LoginResponseDTO("Login bem-sucedido", token, (User)auth.getPrincipal()));
			
		} catch (AuthenticationException e) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciais inválidas");
		}
	}
	
	@PostMapping("/register")
	public ResponseEntity<RegisterResponseDTO> register(@Valid @RequestBody RegisterDTO data) {
		if (repository.findByLogin(data.login()) != null) return ResponseEntity.badRequest().build();
		
		String encryptedpassword = new BCryptPasswordEncoder().encode(data.password());
		User newUser = new User(data.login(), encryptedpassword, data.role());
		this.repository.save(newUser);
		
		return ResponseEntity.ok(new RegisterResponseDTO("Registro bem-sucedido"));
	}
	
}
