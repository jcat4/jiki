package com.example.model;

import com.example.entity.SectionEntity;

import java.util.List;

public class Page {

    private String title;
    private List<SectionEntity> sections;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<SectionEntity> getSections() {
        return sections;
    }

    public void setSections(List<SectionEntity> sections) {
        this.sections = sections;
    }
}
