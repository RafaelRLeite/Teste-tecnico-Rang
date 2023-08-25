package br.com.rang.agendadorConsulta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.rang.agendadorConsulta.crud.CrudController;
import br.com.rang.agendadorConsulta.crud.CrudService;
import br.com.rang.agendadorConsulta.model.Endereco;
import br.com.rang.agendadorConsulta.service.EnderecoService;

@RestController
@RequestMapping("/endereco")
public class EnderecoController extends CrudController<Endereco, Long> {

	@Autowired
	private EnderecoService enderecoService;
	
	@Override
	public CrudService<Endereco, Long> getService() {
		return enderecoService;
	}

}
