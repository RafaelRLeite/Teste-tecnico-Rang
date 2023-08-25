package br.com.rang.agendadorConsulta.configuration.infra.security;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import br.com.rang.agendadorConsulta.model.User;

@Service
public class TokenService {

	@Value("${api.security.token.secret}")
	private String secret;

	public String generatedToken(User user) {

		try {
			Algorithm algorithm = Algorithm.HMAC256(secret);
			String token = JWT.create()
					.withIssuer("agendador-consulta")
					.withSubject(user.getLogin())
					.withExpiresAt(generetedExpirationData())
					.sign(algorithm);
			return token;
		} catch (JWTCreationException exception) {
			throw new RuntimeException("Erro ao gerar o token", exception);
		}
	}
	
	public String validateToken(String token) {
		try {
			Algorithm algorithm = Algorithm.HMAC256(secret);
			return JWT.require(algorithm)
					.withIssuer("agendador-consulta")
					.build()
					.verify(token)
					.getSubject();
		} catch (JWTVerificationException exception) {
			return "";
		}
	}

	private Instant generetedExpirationData() {
		return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
	}

}
