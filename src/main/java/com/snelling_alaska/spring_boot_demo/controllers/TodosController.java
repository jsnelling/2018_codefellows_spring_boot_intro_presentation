package com.snelling_alaska.spring_boot_demo.controllers;

import com.snelling_alaska.spring_boot_demo.models.Todo;
import com.snelling_alaska.spring_boot_demo.respositories.TodosRepository;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/*
 *  @RestController
 *  ********************************************************************************
 *  Tells Spring that this class serves as a controller. It is a type of component
 *  and in this case allows us to declare the routes which this class is responsible
 *  for handling.
 *
 */
@RestController
public class TodosController {
    /*
     *  @Autowired
     *  ********************************************************************************
     *  Tells Spring to use dependency injection to provide a value for this property.
     */
    @Autowired
    @Setter
    private TodosRepository todos;


    @PostMapping("/todos")
    Todo createTodo(@RequestBody Todo todo) { return todos.save(todo); }

    /*
     *  @ResponseBody
     *  ********************************************************************************
     *  Tells Spring that the value returned from this function should be automatically
     *  serialized to JSON and returned to the client.
     *
     *  @RequestMapping
     *  ********************************************************************************
     *  Attaches the index method of HelloWorldController to the root route:
     *  http://your-site.com/ -> HelloWorldController::index
     */
    @RequestMapping("/todos")
    @ResponseBody
    Iterable<Todo> todos() {
        return todos.findAll();
    }
}
