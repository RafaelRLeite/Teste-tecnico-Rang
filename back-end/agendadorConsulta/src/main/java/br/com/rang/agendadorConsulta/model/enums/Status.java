package br.com.rang.agendadorConsulta.model.enums;

import com.fasterxml.jackson.annotation.JsonValue;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Status {
	
	agendado("Consulta agendada"),
	concluido("Consulta concluida"),
	remarcada("Consulta remarcada"),
	cancelado("Consulta cancelada");
	
	/**
	 * Anotação @JsonValue indica que na Serialização será usado o value(Consulta agendada) do enum e não a sua key(agendado)
	 */
	@JsonValue
	private String situacao;

}
