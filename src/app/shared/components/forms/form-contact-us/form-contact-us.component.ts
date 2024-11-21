import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form-contact-us',
  templateUrl: './form-contact-us.component.html',
  styleUrls: ['./form-contact-us.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    TranslateModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class FormContactUsComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient, private translate: TranslateService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.successMessage = null;
      this.errorMessage = null;

      const formData = this.contactForm.value;
      const emailPayload = {
        recipient: "contact@techadvacer.com", // formData.email,
        // subject: this.translate.instant('FORMS.CONTACT_US.EMAIL.SUBJECT', { name: formData.name }),
        subject: `A person wants to get in touch with us, this is the message: ${formData.name}`,
        message: JSON.stringify(formData),
      };

      this.http
        .post('https://chatbotapi.online/send-email/', emailPayload, {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        })
        .subscribe(
          () => {
            this.successMessage = this.translate.instant('FORMS.CONTACT_US.SUBMIT.SUCCESS');
            this.contactForm.reset();
          },
          () => {
            this.errorMessage = this.translate.instant('FORMS.CONTACT_US.SUBMIT.ERROR');
          },
          () => {
            this.isSubmitting = false;
          }
        );
    } else {
      console.log(this.translate.instant('FORMS.CONTACT_US.SUBMIT.INVALID'));
    }
  }
}
