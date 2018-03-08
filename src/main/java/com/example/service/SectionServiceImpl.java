package com.example.service;

import com.example.entity.SectionEntity;
import com.example.repository.SectionRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class SectionServiceImpl implements SectionService {
    @Autowired
    private SectionRepository sectionRepository;

    @Override
    public void createSection(SectionEntity sectionEntity){
        save(sectionEntity);
    }

    @Override
    public void updateSection(SectionEntity sectionEntity) {
        save(sectionEntity);
    }

    @Override
    public void deleteSection(Integer sectionID) {
        sectionRepository.deleteById(sectionID);
    }

    private void save(SectionEntity sectionEntity) {
        sectionRepository.saveAndFlush(sectionEntity);
    }
}
