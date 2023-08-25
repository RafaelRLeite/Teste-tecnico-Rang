package br.com.rang.agendadorConsulta.crud;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CrudService<T, ID extends Serializable> {

	T save(T entity);

	void delete(ID id);

	List<T> findAll();

	Page<T> findPaginateAll(Pageable page);

	T findById(ID id);

	T update(ID id, T entity);

	List<T> removeList(Long id, List<T> entityList);

	List<T> addList(Long id, List<T> entityList);

}
