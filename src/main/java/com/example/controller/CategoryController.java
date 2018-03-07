package com.example.controller;

import com.example.entity.CategoryEntity;
import com.example.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600) // for local testing
@RestController
@RequestMapping({"/categories"})
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/getCategories")
    public List<CategoryEntity> getCategories(final HttpServletRequest request){
        List<CategoryEntity> categories = categoryRepository.findCategoryByName("Billing");

        return categories;
    }
}
