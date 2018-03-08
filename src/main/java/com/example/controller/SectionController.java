package com.example.controller;

import com.example.entity.SectionEntity;
import com.example.service.SectionService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@CrossOrigin(origins = "*", maxAge = 3600) // for local testing
@RestController
@RequestMapping({"/sections"})
public class SectionController {
    @Autowired
    private SectionService sectionService;

    @PostMapping
    public void create(@RequestBody SectionEntity sectionEntity){
        sectionService.createSection(sectionEntity);
    }

    @PutMapping
    public void update(@RequestBody SectionEntity sectionEntity) {
        sectionService.updateSection(sectionEntity);
    }

    @DeleteMapping(path = {"/{sectionID}"})
    public void delete(@PathVariable("sectionID") int sectionID) {
        sectionService.deleteSection(sectionID);
    }

}
