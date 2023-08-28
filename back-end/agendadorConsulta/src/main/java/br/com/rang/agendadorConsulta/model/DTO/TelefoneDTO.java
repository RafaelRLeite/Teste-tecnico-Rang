package br.com.rang.agendadorConsulta.model.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TelefoneDTO {
	
	private Integer nr_celular;
	private Integer nr_ddd_celular;
	private Integer nr_ddd_telefone;
	private Integer nr_telefone;
	private Long long_medico;
	private Long long_unidade_saude;

}
