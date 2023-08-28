package br.com.rang.agendadorConsulta.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import br.com.rang.agendadorConsulta.crud.CrudServiceImpl;
import br.com.rang.agendadorConsulta.model.UnidadeSaude;
import br.com.rang.agendadorConsulta.repository.UnidadeSaudeRepository;

@Service
public class UnidadeSaudeServiceImpl extends CrudServiceImpl<UnidadeSaude, Long> implements UnidadeSaudeService {

	@Autowired
	private UnidadeSaudeRepository unidadeSaudeRepository;

	@Override
	protected JpaRepository<UnidadeSaude, Long> getRepository() {
		return unidadeSaudeRepository;
	}

}
