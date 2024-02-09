package com.event.management;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(
		info =@Info(
				title = "Aadhi Event Managements",
				version = "0.0.1",
				description = "A corporate event managing full stack application",
				contact = @Contact(
						name = "Charukeas T",
						email = "tcharukeas2003@gmail.com"
						)
				)
		)
public class ManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(ManagementApplication.class, args);
	}

}
