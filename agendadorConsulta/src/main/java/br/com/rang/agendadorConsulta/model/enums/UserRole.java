package br.com.rang.agendadorConsulta.model.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum UserRole {
	
	ADMIN("admin"),
	USER("user");
	
	private String role;
}
