package com.pabloembarach.portfolio.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.pabloembarach.portfolio.dto.ContactRequest;

@Service

public class EmailService {
    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String toEmail;

    public void sendContactEmail(ContactRequest request) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("New Contact Message from " + request.getName());
        message.setText(
            "From: " + request.getName() + "\n" +
            "Email: " + request.getEmail() + "\n\n" + 
            request.getMessage()
        );
        message.setReplyTo(request.getEmail());
        mailSender.send(message);
    }
}
