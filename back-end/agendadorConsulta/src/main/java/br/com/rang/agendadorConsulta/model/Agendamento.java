package br.com.rang.agendadorConsulta.model;

import java.io.Serializable;
import java.sql.Timestamp;

import com.fasterxml.jackson.annotation.JsonBackReference;

import br.com.rang.agendadorConsulta.model.enums.Status;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "agendamento")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Agendamento implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "ts_horario")
	private Timestamp ts_horario;

	@NotNull
	@Column(name = "status")
	private Status status;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "dt_criacao_agendamento")
	private Timestamp dt_criacao_agendamento;

	@JsonBackReference(value = "medico_agendamento")
	@JoinColumn(name = "medico")
	@ManyToOne
	private Medico medico;

}