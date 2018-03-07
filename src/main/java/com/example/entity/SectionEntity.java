package com.example.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Slf4j
@Entity
@Table(name = "section", schema = "public")
public class SectionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "page_id")
    private int pageID;

    @Column(name = "title")
    private String title;

    @Column(name = "markdown")
    private String markdown;

    @Column(name = "sequence_num")
    private int sequenceNum;

    @Column(name = "parent_sequence")
    private int parentSequence;

    @Column(name = "type")
    private String type;

}
