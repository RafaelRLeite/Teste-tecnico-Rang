package br.com.rang.agendadorConsulta.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import br.com.rang.agendadorConsulta.crud.CrudServiceImpl;
import br.com.rang.agendadorConsulta.model.Medico;
import br.com.rang.agendadorConsulta.model.UnidadeSaude;
import br.com.rang.agendadorConsulta.repository.MedicoRepository;

@Service
public class MedicoServiceImpl extends CrudServiceImpl<Medico, Long> implements MedicoService {
	
	@Autowired
	private MedicoRepository medicoRepository;
	
	@Override
	protected JpaRepository<Medico, Long> getRepository() {
		return medicoRepository;
	}

	public UnidadeSaude findUnidadeSaudeByMedicoId(Long idMedico) {
		return medicoRepository.findUnidadeSaudeByMedicoId(idMedico);
	}

}
