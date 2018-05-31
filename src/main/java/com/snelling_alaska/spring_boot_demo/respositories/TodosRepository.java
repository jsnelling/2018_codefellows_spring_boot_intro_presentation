package com.snelling_alaska.spring_boot_demo.respositories;

import com.snelling_alaska.spring_boot_demo.models.Todo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TodosRepository extends CrudRepository<Todo, Long> {
   Iterable<Todo> findAll();

   Optional<Todo> findById(Long id);

   Todo save(Todo todo);
}