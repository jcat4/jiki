package com.example.controller;

import com.example.model.Category;
import com.example.service.CategoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600) // for local testing
@RestController
@RequestMapping({"/categories"})
@Slf4j
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping("/getCategories")
    public ResponseEntity<List<Category>> getCategories(final HttpServletRequest request){
        return new ResponseEntity<>(categoryService.getAllCategories(), HttpStatus.OK);
    }
}
