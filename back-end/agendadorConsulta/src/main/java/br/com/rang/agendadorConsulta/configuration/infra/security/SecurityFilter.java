package br.com.rang.agendadorConsulta.configuration.infra.security;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import br.com.rang.agendadorConsulta.repository.UserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class SecurityFilter extends OncePerRequestFilter {
	
	@Autowired
	private TokenService tokenService;
	
	@Autowired
	private UserRepository userRepository;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
		String token = this.recorveToken(request);
		if(token != null) {
			String login = tokenService.validateToken(token);
			UserDetails user = userRepository.findByLogin(login);
			
			UsernamePasswordAuthenticationToken usernamePassword = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
			SecurityContextHolder.getContext().setAuthentication(usernamePassword);
		}
		filterChain.doFilter(request, response);
	}
	
	private String recorveToken(HttpServletRequest request) {
		String authHeader = request.getHeader("Authorization");
		
		if(authHeader == null) return null;
		
		return authHeader.replace("Bearer", "").trim();
	}

}
