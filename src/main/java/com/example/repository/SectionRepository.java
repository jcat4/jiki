package com.example.repository;

import com.example.entity.SectionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SectionRepository extends JpaRepository<SectionEntity, Integer> {

    List<SectionEntity> findAllByPageIDEquals(@Param("pageID")Integer pageID);

    @Query(value = "SELECT wse " +
            " FROM SectionEntity AS wse " +
            " WHERE wse.pageID = :pageID" +
            " ORDER BY wse.parentSequence, wse.sequenceNum")
    List<SectionEntity> findAllSectionsForPage(@Param("pageID")Integer pageID);
}
