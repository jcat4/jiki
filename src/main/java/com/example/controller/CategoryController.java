package com.example.controller;

import com.example.entity.CategoryEntity;
import com.example.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600) // for local testing
@RestController
@RequestMapping({"/categories"})
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/getCategories")
    public List<CategoryEntity> getCategories(final HttpServletRequest request){
        //List<CategoryEntity> categories = new ArrayList<>();
        //Optional<CategoryEntity> category = categoryRepository.findById(6);
        //categories.add(category.get());
        List<CategoryEntity> categories = categoryRepository.findCategoryByName("Billing");

        return categories;
    }
}
