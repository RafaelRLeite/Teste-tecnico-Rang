package br.com.rang.agendadorConsulta.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.rang.agendadorConsulta.model.Medico;
import br.com.rang.agendadorConsulta.model.UnidadeSaude;

@Repository
public interface MedicoRepository extends JpaRepository<Medico, Long> {

    // Encontra a Unidade de Saúde associada a um médico pelo ID do médico.
    @Query("SELECT m.unidade_saude FROM Medico AS m WHERE m.id =:idMedico")
    UnidadeSaude findUnidadeSaudeByMedicoId(Long idMedico);

}
