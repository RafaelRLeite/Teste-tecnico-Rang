package br.com.rang.agendadorConsulta.crud;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import jakarta.validation.Valid;

public abstract class CrudController<T, ID extends Serializable> {

	public abstract CrudService<T, ID> getService();
	
	@PostMapping
	public ResponseEntity<T> save(@Valid @RequestBody T entity){
		return ResponseEntity.ok(getService().save(entity));
	}
	
	@GetMapping
	public ResponseEntity<List<T>> findAll(){
		return ResponseEntity.ok(getService().findAll());
	}
	
	@GetMapping ("/paginate")
	@ResponseStatus(HttpStatus.OK)
	public Page<T> findPaginateAll(@PageableDefault(page = 0, size = 10, direction = Direction.ASC) Pageable page) {
		return getService().findPaginateAll(page);
	}
	
	@GetMapping({"/{id}"})
	public ResponseEntity<T> findById(@PathVariable("id") ID id){
		return ResponseEntity.ok(getService().findById(id));
	}
	
	@PutMapping({"/{id}"})
	public ResponseEntity<T> update(@PathVariable("id") ID id, @Valid @RequestBody T entity) {
		return ResponseEntity.ok(getService().update(id, entity));
	}
	
	@DeleteMapping({"/{id}"})
	public ResponseEntity<Void> delete(@PathVariable("id") ID id) {
		getService().delete(id);
		return ResponseEntity.noContent().build();
	}
	
}
