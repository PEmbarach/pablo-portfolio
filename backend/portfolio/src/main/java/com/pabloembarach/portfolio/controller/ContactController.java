package com.pabloembarach.portfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pabloembarach.portfolio.dto.ContactRequest;
import com.pabloembarach.portfolio.service.EmailService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
public class ContactController {

    @Autowired
    private EmailService emailService;
    
    @PostMapping("/contact")
    public ResponseEntity<String> handleContact(@Valid @RequestBody ContactRequest request) {
        emailService.sendContactEmail(request);
        return ResponseEntity.ok("Message sent");
    }
}