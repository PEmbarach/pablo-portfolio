package com.pabloembarach.portfolio;

import com.pabloembarach.portfolio.controller.ContactController;
import com.pabloembarach.portfolio.service.EmailService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ContactController.class)
public class ContactControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private EmailService emailService;

    @Test
    public void validRequest_returns200AndCallsEmailService() throws Exception {
        mockMvc.perform(post("/api/contact")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"name\":\"Pablo\",\"email\":\"pablo@test.com\",\"message\":\"Hello\"}"))
                .andExpect(status().isOk())
                .andExpect(content().string("Message sent"));

        verify(emailService, times(1)).sendContactEmail(org.mockito.ArgumentMatchers.any());
    }

    @Test
    public void invalidRequest_returns400AndSkipsEmailService() throws Exception {
        mockMvc.perform(post("/api/contact")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"name\":\"\",\"email\":\"notanemail\",\"message\":\"Hello\"}"))
                .andExpect(status().isBadRequest());

        verify(emailService, times(0)).sendContactEmail(org.mockito.ArgumentMatchers.any());
    }
}