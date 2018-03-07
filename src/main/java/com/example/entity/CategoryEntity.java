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
@Table(name = "category", schema = "public")
public class CategoryEntity /*implements Serializable*/ {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    /*
    @OneToOne(fetch = FetchType.LAZY, targetEntity = CategoryEntity.class)
    @JoinColumn(name = "parent_id", nullable = false, referencedColumnName = "id")
    @JsonManagedReference
    private CategoryEntity parent;
    */

    @Column(name = "parent_id")
    private Integer parentID;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getParentID() {
        return parentID;
    }

    public void setParentID(Integer parentID) {
        this.parentID = parentID;
    }
}
