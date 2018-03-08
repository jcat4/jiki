package com.example.controller;

import com.example.entity.CategoryEntity;
import com.example.model.Category;
import com.example.repository.CategoryRepository;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
@Slf4j
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/getCategories")
    public ResponseEntity<List<Category>> getCategories(final HttpServletRequest request){
        //List<CategoryEntity> categories = new ArrayList<>();
        //Optional<CategoryEntity> category = categoryRepository.findById(6);
        //categories.add(category.get());
        List<Category> categories = new ArrayList<>();

        List<CategoryEntity> categoryEntities = categoryRepository.findAllTopLevelCategories();

        for(CategoryEntity entity:categoryEntities) {
            Category category = new Category();
            category.setName(entity.getName());
            category.setCategoryID(entity.getId());

            List<CategoryEntity> children = categoryRepository.findCategoriesByParentID(entity.getId());

            if (children.size() > 0) {
                List<Category> childCategories = new ArrayList<>();
                for (CategoryEntity child : children) {
                    Category childCategory = new Category();
                    childCategory.setName(child.getName());
                    childCategory.setCategoryID(child.getId());
                    //log.info("name '{}'", child.getName());
                    childCategories.add(childCategory);
                }

                category.setChildren(childCategories);
            }

            categories.add(category);
        }


        return new ResponseEntity<List<Category>>(categories, HttpStatus.OK);
    }
}
