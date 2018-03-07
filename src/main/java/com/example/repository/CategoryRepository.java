package com.example.repository;

//import com.jbhunt.personnel.badDebtProcessor.entity.WorkerServiceCompositeKey;
//import com.jbhunt.personnel.badDebtProcessor.entity.WorkerServiceEntity;

import com.example.entity.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.List;

@Component
public interface CategoryRepository extends JpaRepository<CategoryEntity, Integer> {

    //CategoryEntity findById(Integer id);

    @Query(value = "SELECT distinct(wse) " +
            " FROM CategoryEntity AS wse " +
            " WHERE wse.name = :name")
    List<CategoryEntity> findCategoryByName(@Param("name")String name);

}