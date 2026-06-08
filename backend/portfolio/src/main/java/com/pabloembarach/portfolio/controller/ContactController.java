package com.pabloembarach.portfolio.controller;

import com.pabloembarach.portfolio.dto.ContactRequest;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ContactController {

    @PostMapping("/contact")
    public ResponseEntity<String> handleContact(@Valid @RequestBody ContactRequest request) {
        return ResponseEntity.ok("Message sent");
    }
}