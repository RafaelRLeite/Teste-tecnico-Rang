package br.com.rang.agendadorConsulta.crud;

import java.io.Serializable;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;

@Service
public abstract class CrudServiceImpl<T, ID extends Serializable> implements CrudService<T, ID> {

	protected abstract JpaRepository<T, ID> getRepository();
	
	@Autowired
	private ModelMapper modelMapper;

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
	public  T update(ID id, T entityUpdate) {
		T entity = getRepository().findById(id).orElseThrow(() -> new EntityNotFoundException("A entidade do ID: " + id + " não foi encontrada"));
		modelMapper.map(entityUpdate, entity);
		return getRepository().save(entity);
	}

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
