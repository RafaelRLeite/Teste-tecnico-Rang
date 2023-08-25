package br.com.rang.agendadorConsulta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.rang.agendadorConsulta.crud.CrudController;
import br.com.rang.agendadorConsulta.crud.CrudService;
import br.com.rang.agendadorConsulta.model.Agendamento;
import br.com.rang.agendadorConsulta.service.AgendamentoService;

@RestController
@RequestMapping("/agendamento")
public class AgendamentoController extends CrudController<Agendamento, Long> {

	@Autowired
	private AgendamentoService agendamentoService;
	
	@Override
	public CrudService<Agendamento, Long> getService() {
		return agendamentoService;
	}
	
}
