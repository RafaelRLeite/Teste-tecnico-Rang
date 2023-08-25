package br.com.rang.agendadorConsulta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.rang.agendadorConsulta.crud.CrudController;
import br.com.rang.agendadorConsulta.crud.CrudService;
import br.com.rang.agendadorConsulta.model.Medico;
import br.com.rang.agendadorConsulta.service.MedicoService;

@RestController
@RequestMapping("/medico")
public class MedicoController extends CrudController<Medico, Long> {

	@Autowired
	private MedicoService medicoService;

	@Override
	public CrudService<Medico, Long> getService() {
		return medicoService;
	}

}
