package com.example.service;

import com.example.entity.PageEntity;
import com.example.model.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public interface PageService {
    List<PageEntity> findByCategoryId(Integer categoryID);
    Page findByPageId(Integer pageID);

    public void create(PageEntity pageEntity);
    public void update(PageEntity pageEntity);
    public void delete(int pageID);
}
