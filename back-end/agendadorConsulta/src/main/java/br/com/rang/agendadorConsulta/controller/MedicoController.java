package br.com.rang.agendadorConsulta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.rang.agendadorConsulta.crud.CrudController;
import br.com.rang.agendadorConsulta.crud.CrudService;
import br.com.rang.agendadorConsulta.model.Medico;
import br.com.rang.agendadorConsulta.model.UnidadeSaude;
import br.com.rang.agendadorConsulta.service.MedicoService;
import br.com.rang.agendadorConsulta.service.MedicoServiceImpl;

@RestController
@RequestMapping("/medico")
public class MedicoController extends CrudController<Medico, Long> {

	@Autowired
	private MedicoService medicoService;

	@Autowired
	private MedicoServiceImpl medicoServiceImpl;

	@Override
	public CrudService<Medico, Long> getService() {
		return medicoService;
	}

	@GetMapping("/unidade-saude/{idMedico}")
	public ResponseEntity<UnidadeSaude> findUnidadeSaudeByMedicoId(@PathVariable("idMedico") Long idMedico) {
		return ResponseEntity.ok(medicoServiceImpl.findUnidadeSaudeByMedicoId(idMedico));
	}

}
