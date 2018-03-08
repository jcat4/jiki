package com.example.service;

import com.example.entity.PageEntity;
import com.example.entity.SectionEntity;
import com.example.repository.PageRepository;
import com.example.repository.SectionRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Page;

import java.util.List;

@Slf4j
@Service
public class PageServiceImpl implements PageService {
    @Autowired
    private PageRepository pageRepository;

    @Autowired
    private SectionRepository sectionRepository;

    public List<PageEntity> findByCategoryId(Integer categoryID) {
        return pageRepository.findAllPagesForCategory(categoryID);
    }

    @Override
    public Page findByPageId(Integer pageID) {
        Page page = new Page();
        List<SectionEntity> sectionEntities;
        PageEntity pageEntity = pageRepository.findPageByID(pageID);

        if (pageEntity != null) {

            sectionEntities = sectionRepository.findAllSectionsForPage(pageEntity.getId());

            //log.info(sectionEntities.size() + " sections  found for " + pageEntity.getTitle());

            page.setTitle(pageEntity.getTitle());

            if(sectionEntities.size() > 0) {
                page.setSections(sectionEntities);
            }
        } else {
            //log.error("No page found with id: " + pageID);
        }

        return page;
    }

    @Override
    public void create(PageEntity pageEntity) {
        pageRepository.saveAndFlush(pageEntity);
    }

    @Override
    public void update(PageEntity pageEntity) {
        if(pageEntity.getId() == null) {
            throw new RuntimeException("No ID available to update");
        }
        pageRepository.saveAndFlush(pageEntity);
    }

    @Override
    public void delete(Integer pageID) {
        if(pageID == null) {
            throw new RuntimeException("No ID available to delete");
        }
        pageRepository.deleteById(pageID);
    }
}
