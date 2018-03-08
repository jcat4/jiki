package com.example.model;

import com.example.entity.SectionEntity;
import lombok.Data;

import java.util.List;

@Data
public class Page {
    private Integer id;
    private String title;
    private List<SectionEntity> section;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<SectionEntity> getSection() {
        return section;
    }

    public void setSection(List<SectionEntity> section) {
        this.section = section;
    }
}
