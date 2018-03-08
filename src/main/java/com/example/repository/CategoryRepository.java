package com.example.repository;

import com.example.entity.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<CategoryEntity, Integer> {

    //CategoryEntity findById(Integer id);

    @Query(value = "SELECT DISTINCT(wse) " +
            " FROM CategoryEntity AS wse " +
            " WHERE wse.parentID IS NULL")
    List<CategoryEntity> findAllTopLevelCategories();

    @Query(value = "SELECT wse " +
            " FROM CategoryEntity AS wse " +
            " WHERE wse.parentID = :parentID")
    List<CategoryEntity> findCategoriesByParentID(@Param("parentID")Integer parentID);
}
