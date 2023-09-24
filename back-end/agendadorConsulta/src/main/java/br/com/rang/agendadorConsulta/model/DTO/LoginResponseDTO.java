package br.com.rang.agendadorConsulta.model.DTO;

import br.com.rang.agendadorConsulta.model.User;

public record LoginResponseDTO(String message, String token, User user) {

}
