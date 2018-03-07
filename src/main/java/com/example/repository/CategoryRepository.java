package com.example.repository;

import com.example.entity.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface CategoryRepository extends JpaRepository<CategoryEntity, Integer> {

    //CategoryEntity findById(Integer id);

    @Query(value = "SELECT distinct(wse) " +
            " FROM CategoryEntity AS wse " +
            " WHERE wse.parentID IS NULL")
    List<CategoryEntity> findAllTopLevelCategories();

    @Query(value = "SELECT wse " +
            " FROM CategoryEntity AS wse " +
            " WHERE wse.parentID = :parentID")
    List<CategoryEntity> findCategoriesByParentID(@Param("parentID")int parentID);
}
