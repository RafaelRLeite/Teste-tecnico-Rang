package br.com.rang.agendadorConsulta.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import br.com.rang.agendadorConsulta.crud.CrudServiceImpl;
import br.com.rang.agendadorConsulta.model.Agendamento;
import br.com.rang.agendadorConsulta.repository.AgendamentoRepository;
import jakarta.persistence.EntityNotFoundException;

@Service
public class AgendamentoServiceImpl extends CrudServiceImpl<Agendamento, Long> implements AgendamentoService {

	@Autowired
    private AgendamentoRepository agendamentoRepository;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	protected JpaRepository<Agendamento, Long> getRepository() {
		return agendamentoRepository;
	}
	
	@Override
	public Agendamento update(Long id, Agendamento entity) {
		Agendamento agendamento = getRepository().findById(id).orElseThrow(() -> new EntityNotFoundException("A entidade do ID: " + id + " não foi encontrada"));
		modelMapper.map(entity, agendamento);
		return getRepository().save(agendamento);
	}
}
