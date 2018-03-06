package com.example.configuration;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.filter.CharacterEncodingFilter;

import javax.servlet.FilterRegistration;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;

/**
 *
 * This class initializes the application and add the servlets, filters and
 * listeners to the context.
 *
 */
public class ApplicationInitializer implements WebApplicationInitializer {
	@Override
	public void onStartup(ServletContext context) throws ServletException {

		// Character encoding filter
		FilterRegistration characterEncodingFilter = context.addFilter("encodingFilter", CharacterEncodingFilter.class);
		characterEncodingFilter.setInitParameter("encoding", "UTF-8");
		characterEncodingFilter.setInitParameter("forceEncoding", "true");
		characterEncodingFilter.addMappingForUrlPatterns(null, false, "/*");
	}
}
