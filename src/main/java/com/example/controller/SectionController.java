package com.example.controller;

import com.example.entity.PageEntity;
import com.example.entity.SectionEntity;
import com.example.model.Page;
import com.example.repository.SectionRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.example.service.PageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@CrossOrigin(origins = "*", maxAge = 3600) // for local testing
@RestController
@RequestMapping({"/sections"})
public class SectionController {

    @Autowired
    private SectionRepository sectionRepository;

    @PostMapping
    public void create(@RequestBody SectionEntity sectionEntity){
        sectionRepository.saveAndFlush(sectionEntity);
    }

    @DeleteMapping(path = {"/{sectionID}"})
    public void delete(@PathVariable("sectionID") int sectionID) {
        sectionRepository.deleteById(sectionID);
    }

}
