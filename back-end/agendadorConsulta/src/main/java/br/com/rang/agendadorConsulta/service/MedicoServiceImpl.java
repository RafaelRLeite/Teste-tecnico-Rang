package br.com.rang.agendadorConsulta.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import br.com.rang.agendadorConsulta.crud.CrudServiceImpl;
import br.com.rang.agendadorConsulta.model.Medico;
import br.com.rang.agendadorConsulta.repository.MedicoRepository;
import jakarta.persistence.EntityNotFoundException;

@Service
public class MedicoServiceImpl extends CrudServiceImpl<Medico, Long> implements MedicoService {
	
	@Autowired
	private MedicoRepository medicoRepository;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	protected JpaRepository<Medico, Long> getRepository() {
		return medicoRepository;
	}

	@Override
	public Medico update(Long id, Medico entity) {
		Medico medico = getRepository().findById(id).orElseThrow(() -> new EntityNotFoundException("A entidade do ID: " + id + " não foi encontrada"));
		modelMapper.map(medico, entity);
		return getRepository().save(medico);
	}

}
