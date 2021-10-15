package com.example.demo.service;

import java.util.List;

import javax.transaction.Transactional;

import com.example.demo.model.Demo;
import com.example.demo.repository.DemoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class DemoService {

    @Autowired
    private DemoRepository repo;

    public List<Demo> listAll() {
        return repo.findAll();
    }

    public void save(Demo demo){
        repo.save(demo);
    }

    public Demo get(Integer id){
        return repo.findById(id).get();
    }

    public void delete(Integer id){
        repo.deleteById(id);
    }
}