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
@Table(name = "category", schema = "public")
public class CategoryEntity /*implements Serializable*/ {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

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

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
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
