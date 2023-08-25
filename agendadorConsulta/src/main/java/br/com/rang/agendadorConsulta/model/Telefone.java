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
@Table(name = "telefone")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Telefone implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "nr_celular")
	private int nr_celular;

	@Column(name = "nr_ddd_celular")
	private int nr_ddd_celular;

	@Column(name = "nr_ddd_telefone")
	private int nr_ddd_telefone;

	@Column(name = "nr_telefone")
	private int nr_telefone;

	@JsonBackReference(value = "telefone_medico")
	@JoinColumn(name = "medico")
	@ManyToOne(fetch = FetchType.LAZY)
	private Medico medico;

	@JsonBackReference(value = "telefone_unidade_saude")
	@JoinColumn(name = "unidade_saude")
	@ManyToOne(fetch = FetchType.LAZY)
	private UnidadeSaude unidade_saude;

}