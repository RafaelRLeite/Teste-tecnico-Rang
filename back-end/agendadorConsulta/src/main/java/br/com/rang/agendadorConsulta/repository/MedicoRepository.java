package br.com.rang.agendadorConsulta.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.rang.agendadorConsulta.model.Medico;

@Repository
public interface MedicoRepository extends JpaRepository<Medico, Long> {

}
