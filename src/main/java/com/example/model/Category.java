package com.example.model;

import java.util.List;

public class Category {
    private String name;
    private List<Category> children;

    void Category() {
        children = null;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Category> getChildren() {
        return children;
    }

    public void setChildren(List<Category> children) {
        this.children = children;
    }
}