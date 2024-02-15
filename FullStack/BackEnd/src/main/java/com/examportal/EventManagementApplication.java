package com.examportal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// import io.swagger.v3.oas.annotations.OpenAPIDefinition;
// import io.swagger.v3.oas.annotations.info.Contact;
// import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
// @OpenAPIDefinition(
// 		info =@Info(
// 				title = "Corporate Event Manager",
// 				version = "1.1.2",
// 				description = "Manages corporate events with ease",
// 				contact = @Contact(
// 						name = "Gowtham",
// 						email = "gowtham@gmail.com"
// 						)
// 				)
// 		)
public class EventManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(EventManagementApplication.class, args);
	}

}
