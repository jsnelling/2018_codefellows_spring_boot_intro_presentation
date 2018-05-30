package com.snelling_alaska.spring_boot_demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories("com.snellling_alaska.spring_boot_demo.repositories")
@EntityScan(basePackages = { "com.snelling_alaska.spring_boot_demo.models"})
@SpringBootApplication(scanBasePackages = { "com.snelling_alaska.spring_boot_demo" })
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
