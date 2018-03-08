package com.example.service;

import com.example.entity.CategoryEntity;
import com.example.entity.PageEntity;
import com.example.model.Category;
import com.example.model.Page;
import com.example.repository.CategoryRepository;
import com.example.repository.PageRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private PageRepository pageRepository;

    @Override
    public List<Category> getAllCategories() {
        //List<CategoryEntity> categories = new ArrayList<>();
        //Optional<CategoryEntity> category = categoryRepository.findById(6);
        //categories.add(category.get());
        List<Category> categories = new ArrayList<>();

        List<CategoryEntity> categoryEntities = categoryRepository.findAllTopLevelCategories();

        for(CategoryEntity entity:categoryEntities) {
            Category category = new Category();
            category.setName(entity.getName());
            category.setCategoryID(entity.getId());

            List<PageEntity> pageEntities = pageRepository.findAllPagesForCategory(entity.getId());

            List<Page> pages = new ArrayList<>();
            for(PageEntity page : pageEntities) {
                Page tempPage = new Page();
                tempPage.setTitle(page.getTitle());
                tempPage.setId(page.getId());
                pages.add(tempPage);
            }
            category.setPage(pages);

            List<CategoryEntity> children = categoryRepository.findCategoriesByParentID(entity.getId());

            if (children.size() > 0) {
                List<Category> childCategories = new ArrayList<>();
                for (CategoryEntity child : children) {
                    Category childCategory = new Category();
                    childCategory.setName(child.getName());
                    childCategory.setCategoryID(child.getId());
                    //log.info("name '{}'", child.getName());
                    childCategories.add(childCategory);

                    List<PageEntity> pageEntityList = pageRepository.findAllPagesForCategory(entity.getId());

                    List<Page> pagesAgain = new ArrayList<>();
                    for(PageEntity page : pageEntityList) {
                        Page tempPage = new Page();
                        tempPage.setId(page.getId());
                        tempPage.setTitle(page.getTitle());
                        pagesAgain.add(tempPage);
                    }
                    category.setPage(pagesAgain);
                }

                category.setChildren(childCategories);
            }

            categories.add(category);
        }


        return categories;
    }
}
