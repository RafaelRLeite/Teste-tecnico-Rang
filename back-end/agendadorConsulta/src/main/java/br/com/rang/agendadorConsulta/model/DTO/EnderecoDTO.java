package br.com.rang.agendadorConsulta.model.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EnderecoDTO {
	private String nr_cep;
	private String tx_bairro;
	private String tx_complemento;
	private String tx_localidade;
	private String tx_logradouro;
	private String tx_uf;
	private Long long_medico;
	private Long long_unidade_saude;
}
