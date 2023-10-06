import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';

import { ContactForm } from 'src/app/shared/types/contact-form.type';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isContactFormSent = false;

  nameLabel$: Observable<string> = of('Name');
  surnameLabel$: Observable<string> = of('Surname');
  descriptionLabel$: Observable<string> = of('Description');
  emailLabel$: Observable<string> = of('Email');

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      description: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form has been sent');
      const formData: ContactForm = this.contactForm.value;
      this.contactForm.reset();
      this.isContactFormSent = true;
      console.log(formData);
    } else {
      console.log(
        'Form is invalid',
        this.contactForm.value,
        this.contactForm.errors
      );
    }
  }

  get nameControl(): FormControl {
    return this.contactForm.get('name') as FormControl;
  }

  get surnameControl(): FormControl {
    return this.contactForm.get('surname') as FormControl;
  }

  get descriptionControl(): FormControl {
    return this.contactForm.get('description') as FormControl;
  }

  get emailControl(): FormControl {
    return this.contactForm.get('email') as FormControl;
  }
}
