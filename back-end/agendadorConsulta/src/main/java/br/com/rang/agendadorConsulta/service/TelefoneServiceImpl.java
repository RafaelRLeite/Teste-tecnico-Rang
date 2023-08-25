package br.com.rang.agendadorConsulta.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import br.com.rang.agendadorConsulta.crud.CrudServiceImpl;
import br.com.rang.agendadorConsulta.model.Telefone;
import br.com.rang.agendadorConsulta.repository.TelefoneRepository;
import jakarta.persistence.EntityNotFoundException;

@Service
public class TelefoneServiceImpl extends CrudServiceImpl<Telefone, Long> implements TelefoneService {

	@Autowired
	private TelefoneRepository telefoneRepository;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	protected JpaRepository<Telefone, Long> getRepository() {
		return telefoneRepository;
	}

	@Override
	public Telefone update(Long id, Telefone entity) {
		Telefone telefone = getRepository().findById(id).orElseThrow(() -> new EntityNotFoundException("A entidade do ID: " + id + " não foi encontrada"));
		modelMapper.map(entity, telefone);
		return getRepository().save(telefone);
	}

}
