package br.com.rang.agendadorConsulta.model;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.br.CPF;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "medico")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Medico implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank(message = "Nome não pode ser vazio")
	@Column(name = "tx_nome")
	private String tx_nome;

	@CPF(message = "CPF invalido")
	@NotBlank(message = "CPF não pode ser vazio")
	@Column(name="nr_cpf",unique = true)
	private String nr_cpf;

	@NotBlank(message = "CRM não pode ser vazio")
	@Length(min = 3, message = "CRM deve ter no mínimo 6 digitos")
	@Column(name="nr_crm",unique = true)
	private String nr_crm;

	@NotBlank(message = "Especialidade não pode ser vazio")
	@Column(name = "tx_especialidade")
	private String tx_especialidade;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "dt_criacao_medico")
	private Timestamp dt_criacao_medico;

	@JsonManagedReference(value = "telefone_medico")
	@OneToMany(mappedBy = "medico", cascade = { CascadeType.ALL })
	private List<Telefone> telefones_medico;

	@JsonManagedReference(value = "endereco_medico")
	@OneToMany(mappedBy = "medico", cascade = { CascadeType.ALL })
	private List<Endereco> enderecos_medico;

	@JsonManagedReference(value = "medico_agendamento")
	@OneToMany(mappedBy = "medico", cascade = { CascadeType.ALL })
	private List<Agendamento> agendamentos;

	@JsonBackReference(value = "unidade_saude_medico")
	@JoinColumn(name = "unidade_saude")
	@ManyToOne(fetch = FetchType.LAZY)
	private UnidadeSaude unidadeSaude;

}