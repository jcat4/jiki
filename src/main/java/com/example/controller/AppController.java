package com.jbhunt.infrastructure.preferences.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

@Controller
public class  AppController {

	@RequestMapping({ "/",
    "/profile",
    "/defaults",
    "/notifications","/error/**","/error401", "/error404", "/error500" })
	public String home(HttpSession httpSession) {
		return "forward:/index.html";
	}



}
