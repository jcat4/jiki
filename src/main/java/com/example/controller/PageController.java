package com.example.controller;

import com.example.entity.PageEntity;
import com.example.model.Page;
import com.example.service.PageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@CrossOrigin(origins = "*", maxAge = 3600) // for local testing
@RestController
@RequestMapping({"/pages"})
public class PageController {
    @Autowired
    private PageService pageService;

    @GetMapping(path = {"/{categoryID}"})
    public List<PageEntity> findByCategoryID(@PathVariable("categoryID") int categoryID) {
        return pageService.findByCategoryId(categoryID);
    }

    @GetMapping(path = {"/page/{pageID}"})
    public Page findByPageID(@PathVariable("pageID") int pageID) {
        return pageService.findByPageId(pageID);
    }

    @PostMapping
    public void create(@RequestBody PageEntity pageEntity){
        pageService.create(pageEntity);
    }

    @DeleteMapping(path = {"/{pageID}"})
    public void delete(@PathVariable("pageID") int pageID) {
        pageService.delete(pageID);
    }
}
