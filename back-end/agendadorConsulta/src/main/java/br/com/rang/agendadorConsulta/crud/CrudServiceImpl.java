package br.com.rang.agendadorConsulta.crud;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;

@Service
public abstract class CrudServiceImpl<T, ID extends Serializable> implements CrudService<T, ID> {

	protected abstract JpaRepository<T, ID> getRepository();

	@Override
	public T save(T entity) {
		return getRepository().save(entity);
	}

	@Override
	public void delete(ID id) {
		if (getRepository().findById(id).isPresent()) {
			getRepository().deleteById(id);
			return;
		}
		throw new EntityNotFoundException("A entidade do ID: " + id + " não foi encontrada");
	}

	@Override
	public List<T> findAll() {
		return getRepository().findAll();
	}

	@Override
	public Page<T> findPaginateAll(Pageable page) {
		return getRepository().findAll(page);
	}

	@Override
	public T findById(ID id) {
		return getRepository().findById(id).orElseThrow(() -> new EntityNotFoundException("A entidade do ID: " + id + " não foi encontrada"));
	}

	@Override
	public abstract T update(ID id, T entity); // TODO Metodo tem que ser implementado manualmente

	@Override
	public List<T> removeList(Long id, List<T> entityList) {
		// TODO Implementar metodo
		return null;
	}

	@Override
	public List<T> addList(Long id, List<T> entityList) {
		// TODO IMplementar metodo
		return null;
	}

}
