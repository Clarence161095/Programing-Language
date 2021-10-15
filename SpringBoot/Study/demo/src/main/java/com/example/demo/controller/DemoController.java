package com.example.demo.controller;

import java.util.List;

import com.example.demo.model.Demo;
import com.example.demo.service.DemoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
public class DemoController {

    @Autowired
    private DemoService service;

    @GetMapping("/listAll")
    public List<Demo> listAll() {
        return service.listAll();
    }

    @GetMapping("/get/{id}")
    public Demo get(@PathVariable Integer id) {
        try {
            Demo demo = service.get(id);
            return demo;
        } catch (Exception e) {
            return null;
        }
    }

    @PostMapping("/create")
    public String create(@RequestBody Demo entity) {
        try {
            service.save(entity);
            return "Created:" + entity.getId() + entity.getValue();
        } catch (Exception e) {
            return "Creation is fail.";
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable Integer id, @RequestBody Demo entity) {
        try {
            if (service.get(id) != null) {
                service.save(entity);
            }
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Integer id){
        try {
            service.delete(id);
            return "Deleted: " + id;
        } catch (Exception e) {
            return "Delete is fail.";
        }
    }
}