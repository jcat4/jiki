package com.example.service;

import com.example.entity.SectionEntity;

public interface SectionService {
    void createSection(SectionEntity sectionEntity);
    void updateSection(SectionEntity sectionEntity);
    void deleteSection(Integer sectionID);
}
