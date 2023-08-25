package br.com.rang.agendadorConsulta.model.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Status {
	
	agendado("Consulta agendada"),
	concluido("Consulta concluida"),
	remarcada("Consulta remarcada"),
	cancelado("Consulta cancelada");
	
	private String situacao;

}
