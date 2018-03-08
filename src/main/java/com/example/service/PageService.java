package com.example.service;

import com.example.entity.PageEntity;

import java.util.List;

public interface PageService {
    List<PageEntity> findByCategoryId(Integer categoryID);
    PageEntity findByPageId(Integer pageID);
}
