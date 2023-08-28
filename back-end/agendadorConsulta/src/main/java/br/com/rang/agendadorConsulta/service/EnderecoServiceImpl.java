package br.com.rang.agendadorConsulta.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import br.com.rang.agendadorConsulta.crud.CrudServiceImpl;
import br.com.rang.agendadorConsulta.model.Endereco;
import br.com.rang.agendadorConsulta.model.Medico;
import br.com.rang.agendadorConsulta.model.UnidadeSaude;
import br.com.rang.agendadorConsulta.model.DTO.EnderecoDTO;
import br.com.rang.agendadorConsulta.repository.EnderecoRepository;
import br.com.rang.agendadorConsulta.repository.MedicoRepository;
import br.com.rang.agendadorConsulta.repository.UnidadeSaudeRepository;
import jakarta.persistence.EntityNotFoundException;

@Service
public class EnderecoServiceImpl extends CrudServiceImpl<Endereco, Long> implements EnderecoService {
	
	@Autowired
	private EnderecoRepository enderecoRepository;
	
	@Autowired
	private MedicoRepository medicoRepository;

	@Autowired
	private UnidadeSaudeRepository unidadeSaudeRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	protected JpaRepository<Endereco, Long> getRepository() {
		return enderecoRepository;
	}

	public Endereco save(EnderecoDTO enderecoDTO) {
		Endereco endereco = super.save(modelMapper.map(enderecoDTO, Endereco.class));
		Long id_medico = enderecoDTO.getLong_medico();
		Long id_unidade_saude = enderecoDTO.getLong_unidade_saude();
		
		if (id_medico != null) {
			Medico medico = medicoRepository.findById(id_medico)
					.orElseThrow(() -> new EntityNotFoundException("A entidade do ID: " + id_medico + " não foi encontrada"));
			addToListEntity(endereco, medico);
			return endereco;
		}
		UnidadeSaude unidade_saude = unidadeSaudeRepository.findById(id_unidade_saude)
				.orElseThrow(() -> new EntityNotFoundException("A entidade do ID: " + id_unidade_saude + " não foi encontrada"));
		addToListEntity(endereco, unidade_saude);
		return endereco;
	}

	public Endereco update(Long id, EnderecoDTO enderecoDTO) {
		Endereco endereco = super.update(id, modelMapper.map(enderecoDTO, Endereco.class));
		Long id_medico = enderecoDTO.getLong_medico();
		Long id_unidade_saude = enderecoDTO.getLong_unidade_saude();

		if (id_medico != null) {
			Medico medico = medicoRepository.findById(id_medico)
					.orElseThrow(() -> new EntityNotFoundException("A entidade do ID: " + id_medico + " não foi encontrada"));
			addToListEntity(endereco, medico);
			return endereco;
		}
		UnidadeSaude unidade_saude = unidadeSaudeRepository.findById(id_unidade_saude)
				.orElseThrow(() -> new EntityNotFoundException("A entidade do ID: " + id_unidade_saude + " não foi encontrada"));
		addToListEntity(endereco, unidade_saude);
		return endereco;
	}
	
	private void addToListEntity(Endereco endereco, Object entity) {
		if (entity instanceof Medico) {
			Medico medico = (Medico) entity;
			medico.getEnderecos_medico().add(endereco);
			endereco.setMedico(medico);
			endereco.setUnidade_saude(null);
	    } else if (entity instanceof UnidadeSaude) {
			UnidadeSaude unidadeSaude = (UnidadeSaude) entity;
			unidadeSaude.getEnderecos_unidade_saude().add(endereco);
			endereco.setMedico(null);
			endereco.setUnidade_saude(unidadeSaude);
	    }
		
		enderecoRepository.save(endereco);
	}
	
}
