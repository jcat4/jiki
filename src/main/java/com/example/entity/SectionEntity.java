package com.example.entity;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Slf4j
@Entity
@Table(name = "section", schema = "public")
public class SectionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "page_id")
    private Integer pageID;

    @Column(name = "title")
    private String title;

    @Column(name = "markdown")
    private String markdown;

    @Column(name = "sequence_num")
    private Integer sequenceNum;

    @Column(name = "parent_sequence")
    private Integer parentSequence;

    @Column(name = "type")
    private String type;

}
