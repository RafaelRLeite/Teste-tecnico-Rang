package br.com.rang.agendadorConsulta.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import br.com.rang.agendadorConsulta.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	UserDetails findByLogin(String login);

}
