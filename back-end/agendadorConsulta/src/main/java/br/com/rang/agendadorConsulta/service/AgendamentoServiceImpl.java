package br.com.rang.agendadorConsulta.service;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import br.com.rang.agendadorConsulta.crud.CrudServiceImpl;
import br.com.rang.agendadorConsulta.model.Agendamento;
import br.com.rang.agendadorConsulta.repository.AgendamentoRepository;

@Service
public class AgendamentoServiceImpl extends CrudServiceImpl<Agendamento, Long> implements AgendamentoService {

	@Autowired
	private AgendamentoRepository agendamentoRepository;

	@Override
	protected JpaRepository<Agendamento, Long> getRepository() {
		return agendamentoRepository;
	}

	@Override
	public Agendamento save(Agendamento agendamento) {
		List<Agendamento> agendamentos = agendamentoRepository.findAll();

		boolean isAvailable = isHorarioDisponivel(agendamentos, agendamento.getDt_marcacao());

		if (isAvailable) {
			throw new RuntimeException("Conflito de horário com o médico.");
		}

		return super.save(agendamento);
	}

	private Boolean isHorarioDisponivel(List<Agendamento> agendamentos, LocalDateTime dataHoraMarcacao) {

		LocalTime horaAbertura = LocalTime.of(8, 0);
		LocalTime horaFechamento = LocalTime.of(18, 0);
		LocalTime horaMarcacao = dataHoraMarcacao.toLocalTime();

		if (horaMarcacao.isBefore(horaAbertura) || horaMarcacao.isAfter(horaFechamento))
			return false;

		return agendamentos.stream().anyMatch(agentamento -> agentamento.getDt_marcacao().equals(dataHoraMarcacao));
	}

}
