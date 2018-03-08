package com.example.model;

import com.example.entity.SectionEntity;
import lombok.Data;

import java.util.List;

@Data
public class Page {
    private Integer id;
    private String title;
    private List<SectionEntity> section;
}
