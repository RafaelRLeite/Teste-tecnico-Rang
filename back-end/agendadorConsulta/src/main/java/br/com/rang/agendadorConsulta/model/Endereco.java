package br.com.rang.agendadorConsulta.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "endereco")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Endereco implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "nr_cep")
	private String nr_cep;

	@Column(name = "tx_bairro")
	private String tx_bairro;

	@Column(name = "tx_complemento")
	private String tx_complemento;

	@Column(name = "tx_localidade")
	private String tx_localidade;

	@Column(name = "tx_logradouro")
	private String tx_logradouro;

	@Column(name = "tx_uf")
	private String tx_uf;

	@JsonBackReference(value = "endereco_medico")
	@JoinColumn(name = "medico")
	@ManyToOne(fetch = FetchType.LAZY)
	private Medico medico;

	@JsonBackReference(value = "endereco_unidade_saude")
	@JoinColumn(name = "unidade_saude")
	@ManyToOne(fetch = FetchType.LAZY)
	private UnidadeSaude unidade_saude;

}