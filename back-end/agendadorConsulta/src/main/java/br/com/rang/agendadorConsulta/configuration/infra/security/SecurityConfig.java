package br.com.rang.agendadorConsulta.configuration.infra.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import br.com.rang.agendadorConsulta.configuration.CORSConfig;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
	
	@Autowired
	private SecurityFilter securityFilter;
	
	@Autowired
	private CORSConfig corsConfig;
	
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
		return httpSecurity
				.cors(cors -> cors.configurationSource(corsConfig.corsConfigurationSource()))
				.csrf(csrf -> csrf.disable())
				.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				.authorizeHttpRequests(authorize -> authorize
					.requestMatchers("/home", "/css/**", "/js/**").permitAll()
					.requestMatchers(HttpMethod.POST, "/auth/login").permitAll()
					//.requestMatchers(HttpMethod.POST, "/auth/register").hasRole("ADMIN")
					.requestMatchers(HttpMethod.POST, "/auth/register").permitAll()
					.requestMatchers("/agendamento/**").hasAnyRole("USER", "ADMIN")
					.requestMatchers("/medico/**").hasRole("ADMIN")
					.requestMatchers("/unidade-saude/**").hasRole("ADMIN")
					.requestMatchers("/telefone/**").hasRole("ADMIN")
					.requestMatchers("/endereco/**").hasRole("ADMIN")
				)
				.addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
				.build();
	}
	
	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
		return authenticationConfiguration.getAuthenticationManager();
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
