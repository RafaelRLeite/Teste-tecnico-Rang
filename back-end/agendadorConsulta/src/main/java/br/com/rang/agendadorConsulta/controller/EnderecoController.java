package br.com.rang.agendadorConsulta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.rang.agendadorConsulta.crud.CrudController;
import br.com.rang.agendadorConsulta.crud.CrudService;
import br.com.rang.agendadorConsulta.model.Endereco;
import br.com.rang.agendadorConsulta.model.DTO.EnderecoDTO;
import br.com.rang.agendadorConsulta.service.EnderecoService;
import br.com.rang.agendadorConsulta.service.EnderecoServiceImpl;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/endereco")
public class EnderecoController extends CrudController<Endereco, Long> {

	@Autowired
	private EnderecoService enderecoService;
	
	@Autowired
	private EnderecoServiceImpl enderecoServiceImpl;
	
	@Override
	public CrudService<Endereco, Long> getService() {
		return enderecoService;
	}
	
	@PostMapping("/to-list")
	public ResponseEntity<Endereco> save(@Valid @RequestBody EnderecoDTO entity) {
		return ResponseEntity.ok(enderecoServiceImpl.save(entity));
	}

	@PutMapping("/to-list/{id}")
	public ResponseEntity<Endereco> update(@PathVariable("id") Long id, @Valid @RequestBody EnderecoDTO entity) {
		return ResponseEntity.ok(enderecoServiceImpl.update(id, entity));
	}

}
