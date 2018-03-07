package com.example.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@Slf4j
@Entity
@Table(name = "Category", schema = "public")
public class CategoryEntity /*implements Serializable*/ {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    @JsonIgnore
    private Integer id;

    @Column(name = "name")
    private String name;

    @OneToOne(fetch = FetchType.LAZY, targetEntity = CategoryEntity.class)
    @JoinColumn(name = "parent_id", nullable = false, referencedColumnName = "id")
    @JsonManagedReference
    private CategoryEntity parent;

}
