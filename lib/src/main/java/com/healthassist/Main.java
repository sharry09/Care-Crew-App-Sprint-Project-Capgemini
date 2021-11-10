package com.healthassist;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;


@SpringBootApplication
@EnableSwagger2
public class Main {
	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
}

}
//http://localhost:9090/LIFELINE-api/swagger-ui/