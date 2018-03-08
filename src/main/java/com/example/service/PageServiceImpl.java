package com.example.service;

import com.example.entity.PageEntity;
import com.example.repository.PageRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class PageServiceImpl implements PageService {
    @Autowired
    private PageRepository pageRepository;

    public List<PageEntity> findByCategoryId(Integer categoryID) {
        return pageRepository.findAllPagesForCategory(categoryID);
    }

    @Override
    public PageEntity findByPageId(Integer pageID) {
        return  pageRepository.findPageByID(pageID);
    }
}
