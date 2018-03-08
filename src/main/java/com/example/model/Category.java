package com.example.model;

import lombok.Data;

import java.util.List;

@Data
public class Category {
    private int categoryID;
    private String name;
    private List<Category> children;
    private List<Page> page;
}
