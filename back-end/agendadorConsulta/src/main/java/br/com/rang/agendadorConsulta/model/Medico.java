package br.com.rang.agendadorConsulta.model;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
import jakarta.validation.constraints.Pattern;
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
	@Pattern(regexp = "(^\\d{3}\\x2E\\d{3}\\x2E\\d{3}\\x2D\\d{2}$)", message = "cpf deve seguir o padrão 000.000.000-00")
	@Column(name="nr_cpf",unique = true)
	private String nr_cpf;

	@NotBlank(message = "CRM não pode ser vazio")
	@Length(min = 3, message = "CRM deve ter no mínimo 6 digitos")
	@Column(name="nr_crm",unique = true)
	private String nr_crm;

	@NotBlank(message = "Especialidade não pode ser vazio")
	@Column(name = "tx_especialidade")
	private String tx_especialidade;

	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "dt_criacao_medico")
	private LocalDateTime dt_criacao_medico;

	@JsonManagedReference(value = "telefone_medico")
	@OneToMany(mappedBy = "medico", cascade = { CascadeType.ALL })
	private List<Telefone> telefones_medico;

	@JsonManagedReference(value = "endereco_medico")
	@OneToMany(mappedBy = "medico", cascade = { CascadeType.ALL })
	private List<Endereco> enderecos_medico;

	@JsonIgnore
	@OneToMany(mappedBy = "medico", cascade = { CascadeType.ALL })
	private List<Agendamento> agendamentos;

	@JsonBackReference(value = "unidade_saude_medico")
	@JoinColumn(name = "unidade_saude")
	@ManyToOne(fetch = FetchType.LAZY)
	private UnidadeSaude unidade_saude;

}