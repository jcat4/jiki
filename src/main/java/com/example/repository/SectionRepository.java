package com.example.repository;

import com.example.entity.PageEntity;
import com.example.entity.SectionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface SectionRepository extends JpaRepository<SectionEntity, Integer> {

    @Query(value = "SELECT wse " +
            " FROM SectionEntity AS wse " +
            " WHERE wse.pageID = :pageID")
    List<SectionEntity> findAllSectionsForPage(@Param("pageID")int pageID);
}
