package br.com.rang.agendadorConsulta.model.DTO;

import br.com.rang.agendadorConsulta.model.enums.UserRole;

public record RegisterDTO(String login, String password, UserRole role) {

}
