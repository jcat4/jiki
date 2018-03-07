package com.example.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.stream.Collectors;
//todo: to run in cmd type mvn spring-boot:run!!!

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/test")
public class TestController {

	public static final Logger logger = LoggerFactory.getLogger(TestController.class);

	@RequestMapping("/page")
	public String getJson(){
		ClassPathResource cp = new ClassPathResource("page_test.json");
		InputStream inputStream = null;
        try {
        	inputStream = cp.getInputStream();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
        
        return new BufferedReader(new InputStreamReader(inputStream)).lines().collect(Collectors.joining("\n"));
	}

	
}
