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
import br.com.rang.agendadorConsulta.model.Telefone;
import br.com.rang.agendadorConsulta.model.DTO.TelefoneDTO;
import br.com.rang.agendadorConsulta.service.TelefoneService;
import br.com.rang.agendadorConsulta.service.TelefoneServiceImpl;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/telefone")
public class TelefoneController extends CrudController<Telefone, Long> {

	@Autowired
	private TelefoneService telefoneService;
	
	@Autowired
	private TelefoneServiceImpl telefoneServiceImpl;
	
	@Override
	public CrudService<Telefone, Long> getService() {
		return telefoneService;
	}

	@PostMapping("/to-list")
	public ResponseEntity<Telefone> save(@Valid @RequestBody TelefoneDTO entity) {
		return ResponseEntity.ok(telefoneServiceImpl.save(entity));
	}

	@PutMapping("/to-list/{id}")
	public ResponseEntity<Telefone> update(@PathVariable("id") Long id, @Valid @RequestBody TelefoneDTO entity) {
		return ResponseEntity.ok(telefoneServiceImpl.update(id, entity));
	}
	
}
