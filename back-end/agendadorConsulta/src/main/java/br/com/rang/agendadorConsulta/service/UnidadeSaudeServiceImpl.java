package br.com.rang.agendadorConsulta.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import br.com.rang.agendadorConsulta.crud.CrudServiceImpl;
import br.com.rang.agendadorConsulta.model.UnidadeSaude;
import br.com.rang.agendadorConsulta.repository.UnidadeSaudeRepository;
import jakarta.persistence.EntityNotFoundException;

@Service
public class UnidadeSaudeServiceImpl extends CrudServiceImpl<UnidadeSaude, Long> implements UnidadeSaudeService {
	
	@Autowired
	private UnidadeSaudeRepository unidadeSaudeRepository;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	protected JpaRepository<UnidadeSaude, Long> getRepository() {
		return unidadeSaudeRepository;
	}

	@Override
	public UnidadeSaude update(Long id, UnidadeSaude entity) {
		UnidadeSaude unidadeSaude = getRepository().findById(id).orElseThrow(() -> new EntityNotFoundException("A entidade do ID: " + id + " não foi encontrada"));
		modelMapper.map(unidadeSaude, entity);
		return getRepository().save(unidadeSaude);
	}

}
