package br.com.rang.agendadorConsulta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.rang.agendadorConsulta.crud.CrudController;
import br.com.rang.agendadorConsulta.crud.CrudService;
import br.com.rang.agendadorConsulta.model.Telefone;
import br.com.rang.agendadorConsulta.service.TelefoneService;

@RestController
@RequestMapping("/telefone")
public class TelefoneController extends CrudController<Telefone, Long> {

	@Autowired
	private TelefoneService telefoneService;
	
	@Override
	public CrudService<Telefone, Long> getService() {
		return telefoneService;
	}
	
}
