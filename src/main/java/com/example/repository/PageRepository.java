package com.example.repository;

import com.example.entity.PageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface PageRepository extends JpaRepository<PageEntity, Integer> {

    @Query(value = "SELECT wse " +
            " FROM PageEntity AS wse " +
            " WHERE wse.categoryId = :categoryId")
    List<PageEntity> findAllPagesForCategory(@Param("categoryId")int categoryId);

    @Query(value = "SELECT wse " +
            " FROM PageEntity AS wse " +
            " WHERE wse.id = :pageID")
    PageEntity findPageByID(@Param("pageID")int pageID);
}
