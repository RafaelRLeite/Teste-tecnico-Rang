package br.com.rang.agendadorConsulta.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import br.com.rang.agendadorConsulta.crud.CrudServiceImpl;
import br.com.rang.agendadorConsulta.model.Endereco;
import br.com.rang.agendadorConsulta.repository.EnderecoRepository;
import jakarta.persistence.EntityNotFoundException;

@Service
public class EnderecoServiceImpl extends CrudServiceImpl<Endereco, Long> implements EnderecoService {
	
	@Autowired
	private EnderecoRepository enderecoRepository;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	protected JpaRepository<Endereco, Long> getRepository() {
		return enderecoRepository;
	}

	@Override
	public Endereco update(Long id, Endereco entity) {
		Endereco endereco = getRepository().findById(id).orElseThrow(() -> new EntityNotFoundException("A entidade do ID: " + id + " não foi encontrada"));
		modelMapper.map(entity, endereco);
		return getRepository().save(endereco);
	}

}
