package com.example.controller;

import com.example.entity.CategoryEntity;
import com.example.entity.PageEntity;
import com.example.model.Category;
import com.example.model.Page;
import com.example.repository.CategoryRepository;
import com.example.repository.PageRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600) // for local testing
@RestController
@RequestMapping({"/pages"})
public class PageController {

    private Logger log =  LoggerFactory.getLogger(CategoryController.class);

    @Autowired
    private PageRepository pageRepository;

    @GetMapping(path = {"/{categoryID}"})
    public List<PageEntity> findByCategoryID(@PathVariable("categoryID") int categoryID) {
        return pageRepository.findAllPagesForCategory(categoryID);
    }

    @GetMapping(path = {"/page/{pageID}"})
    public Page findByPageID(@PathVariable("pageID") int pageID) {
        Page page = new Page();
        PageEntity pageEntity = pageRepository.findPageByID(pageID);



        return page;
    }
}
