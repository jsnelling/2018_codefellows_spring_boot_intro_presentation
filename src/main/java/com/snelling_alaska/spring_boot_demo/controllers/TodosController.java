package com.snelling_alaska.spring_boot_demo.controllers;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/*
 *  @Controller
 *  ********************************************************************************
 *  Tells Spring that this class serves as a controller. It is a type of component
 *  and in this case allows us to declare the routes which this class is responsible
 *  for handling.
 *
 *  @EnableAutoConfiguration
 *  ********************************************************************************
 *  Tells Spring to, in addition to finding components for dependency injection, do
 *  it's best to automatically configure spring based on the dependencies which are
 *  included.
 */
@Controller
@EnableAutoConfiguration
public class TodosController {
    /*
     *  @RequestMapping
     *  ********************************************************************************
     *  Attaches the index method of HelloWorldController to the root route:
     *  http://your-site.com/ -> HelloWorldController::index
     *
     *  @ResponseBody
     *  ********************************************************************************
     *  Tells Spring that the value returned from this function should be automatically
     *  serialized to JSON and returned to the client.
     */
    @RequestMapping("/")
    @ResponseBody
    String index() {
        return "Hello from Spring Boot!";
    }
}
