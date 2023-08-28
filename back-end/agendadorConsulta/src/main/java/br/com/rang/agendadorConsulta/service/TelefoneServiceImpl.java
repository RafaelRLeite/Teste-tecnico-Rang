package br.com.rang.agendadorConsulta.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import br.com.rang.agendadorConsulta.crud.CrudServiceImpl;
import br.com.rang.agendadorConsulta.model.Medico;
import br.com.rang.agendadorConsulta.model.Telefone;
import br.com.rang.agendadorConsulta.model.UnidadeSaude;
import br.com.rang.agendadorConsulta.model.DTO.TelefoneDTO;
import br.com.rang.agendadorConsulta.repository.MedicoRepository;
import br.com.rang.agendadorConsulta.repository.TelefoneRepository;
import br.com.rang.agendadorConsulta.repository.UnidadeSaudeRepository;
import jakarta.persistence.EntityNotFoundException;

@Service
public class TelefoneServiceImpl extends CrudServiceImpl<Telefone, Long> implements TelefoneService {

	@Autowired
	private TelefoneRepository telefoneRepository;
	
	@Autowired
	private MedicoRepository medicoRepository;

	@Autowired
	private UnidadeSaudeRepository unidadeSaudeRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	protected JpaRepository<Telefone, Long> getRepository() {
		return telefoneRepository;
	}

	public Telefone save(TelefoneDTO telefoneDTO) {
		Telefone telefone = super.save(modelMapper.map(telefoneDTO, Telefone.class));
		Long id_medico = telefoneDTO.getLong_medico();
		Long id_unidade_saude = telefoneDTO.getLong_unidade_saude();
		
		if (id_medico != null) {
			Medico medico = medicoRepository.findById(id_medico)
					.orElseThrow(() -> new EntityNotFoundException("A entidade do ID: " + id_medico + " não foi encontrada"));
			addToListEntity(telefone, medico);
			return telefone;
		}
		UnidadeSaude unidade_saude = unidadeSaudeRepository.findById(id_unidade_saude)
				.orElseThrow(() -> new EntityNotFoundException("A entidade do ID: " + id_unidade_saude + " não foi encontrada"));
		addToListEntity(telefone, unidade_saude);
		return telefone;
	}

	public Telefone update(Long id, TelefoneDTO telefoneDTO) {
		Telefone telefone = super.update(id, modelMapper.map(telefoneDTO, Telefone.class));
		Long id_medico = telefoneDTO.getLong_medico();
		Long id_unidade_saude = telefoneDTO.getLong_unidade_saude();

		if (id_medico != null) {
			Medico medico = medicoRepository.findById(id_medico)
					.orElseThrow(() -> new EntityNotFoundException("A entidade do ID: " + id_medico + " não foi encontrada"));
			addToListEntity(telefone, medico);
			return telefone;
		}
		UnidadeSaude unidade_saude = unidadeSaudeRepository.findById(id_unidade_saude)
				.orElseThrow(() -> new EntityNotFoundException("A entidade do ID: " + id_unidade_saude + " não foi encontrada"));
		addToListEntity(telefone, unidade_saude);
		return telefone;
	}
	
	private void addToListEntity(Telefone telefone, Object entity) {
		if (entity instanceof Medico) {
			Medico medico = (Medico) entity;
			medico.getTelefones_medico().add(telefone);
			telefone.setMedico(medico);
			telefone.setUnidade_saude(null);
	    } else if (entity instanceof UnidadeSaude) {
			UnidadeSaude unidadeSaude = (UnidadeSaude) entity;
			unidadeSaude.getTelefones_unidade_saude().add(telefone);
			telefone.setMedico(null);
			telefone.setUnidade_saude(unidadeSaude);
	    }
		
	    telefoneRepository.save(telefone);
	}

}
