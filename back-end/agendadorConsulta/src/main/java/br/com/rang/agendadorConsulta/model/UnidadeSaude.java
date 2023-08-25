package br.com.rang.agendadorConsulta.model;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import org.hibernate.validator.constraints.br.CNPJ;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "unidade_saude")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UnidadeSaude implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@CNPJ(message = "CNPJ invalido")
	@NotBlank(message = "CNPJ não pode ser vazio")
	@Column(name="nr_cnpj",unique = true)
	private String nr_cnpj;

	@Column(name = "tx_nome_fantasia")
	private String tx_nome_fantasia;

	@NotBlank(message = "Razão Social não pode ser vazio")
	@Column(name = "tx_razao_social")
	private String tx_razao_social;

	@Temporal(TemporalType.DATE)
	@Column(name = "dt_abertura")
	private Date dt_abertura;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "dt_criacao_unidade_saude")
	private Timestamp dt_criacao_unidade_saude;

	@JsonManagedReference(value = "telefone_unidade_saude")
	@OneToMany(mappedBy = "unidade_saude", cascade = { CascadeType.ALL })
	private List<Telefone> telefones_unidade_saude;

	@JsonManagedReference(value = "endereco_unidade_saude")
	@OneToMany(mappedBy = "unidade_saude", cascade = { CascadeType.ALL })
	private List<Endereco> enderecos_unidade_saude;

	@JsonManagedReference(value = "unidade_saude_medico")
	@OneToMany(mappedBy = "unidadeSaude", cascade = { CascadeType.ALL })
	private List<Medico> medicos;

}