package br.com.rang.agendadorConsulta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.rang.agendadorConsulta.crud.CrudController;
import br.com.rang.agendadorConsulta.crud.CrudService;
import br.com.rang.agendadorConsulta.model.UnidadeSaude;
import br.com.rang.agendadorConsulta.service.UnidadeSaudeService;

@RestController
@RequestMapping("/unidade-saude")
public class UnidadeSaudeController extends CrudController<UnidadeSaude, Long> {
	
	@Autowired
	private UnidadeSaudeService unidadeSaudeService;

	@Override
	public CrudService<UnidadeSaude, Long> getService() {
		return unidadeSaudeService;
	}

}
