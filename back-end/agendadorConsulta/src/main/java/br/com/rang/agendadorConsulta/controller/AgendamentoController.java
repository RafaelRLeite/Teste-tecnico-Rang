package br.com.rang.agendadorConsulta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.rang.agendadorConsulta.crud.CrudController;
import br.com.rang.agendadorConsulta.crud.CrudService;
import br.com.rang.agendadorConsulta.model.Agendamento;
import br.com.rang.agendadorConsulta.service.AgendamentoService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/agendamento")
public class AgendamentoController extends CrudController<Agendamento, Long> {

	@Autowired
	private AgendamentoService agendamentoService;

	@Override
	public CrudService<Agendamento, Long> getService() {
		return agendamentoService;
	}

	@Override
	public ResponseEntity<?> save(@Valid @RequestBody Agendamento entity) {
		try {
			return super.save(entity);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
		}
	}

}
