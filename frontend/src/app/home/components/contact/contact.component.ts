import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonButton, IonInput, IonItem, IonLabel, IonSpinner, IonTextarea } from '@ionic/angular/standalone';
import { ContactService } from './contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, IonInput, IonTextarea, IonLabel, IonItem, IonButton, IonSpinner]
})
export class ContactComponent {

  contactForm = new FormGroup({ // Cretaing a reactive form with validation
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  isLoading = false; // Flag to indicate if the form is being submitted
  submitSuccess = false; // Flag to indicate if the form was submitted successfully
  errorMessage = ''; // Variable to hold any error messages

  onSubmit() { // Method to handle form submission
    if (this.contactForm.invalid) return; //Stop if validation fails
    this.isLoading = true; // Set loading flag to true while the form is being submitted
    this.contactService.sendMessage( // Call the sendMessage method from the ContactService
      this.contactForm.value.name ?? '', 
      this.contactForm.value.email ?? '', 
      this.contactForm.value.message ?? ''
    ).subscribe({
      next: () => { // Handle successful submission, runs on success of the HTTP request
        this.isLoading = false;
        this.submitSuccess = true;
      },
      error: () => { // Handle errors during submission, runs on failure of the HTTP request
        this.isLoading = false;
        this.errorMessage = 'An error occurred while sending the message. Please try again later.';
      }
    });
  }

  constructor(private contactService: ContactService) { }

}
