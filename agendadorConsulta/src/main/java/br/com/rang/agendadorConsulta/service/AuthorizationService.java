package br.com.rang.agendadorConsulta.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.rang.agendadorConsulta.repository.UserRepository;

@Service
public class AuthorizationService implements UserDetailsService {
	
	@Autowired
	private UserRepository usersRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		return usersRepository.findByLogin(username);
	}


}
