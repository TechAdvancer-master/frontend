import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
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
    MatSnackBarModule,
  ],
})
export class FormContactUsComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private translate: TranslateService,
    private snackBar: MatSnackBar
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      const formData = this.contactForm.value;
      const emailPayload = {
        recipient: 'contact@techadvancer.com',
        subject: `Contact Us Message from ${formData.name}`,
        message: JSON.stringify(formData),
      };

      this.http
        .post('https://chatbotapi.onlinhe/send-email/', emailPayload, {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        })
        .subscribe(
          () => {
            this.showSnackbar(this.translate.instant('FORMS.CONTACT_US.SUBMIT.SUCCESS'), 'success');
            this.contactForm.reset();
          },
          () => {
            this.showSnackbar(this.translate.instant('FORMS.CONTACT_US.SUBMIT.ERROR'), 'error');
          },
          () => {
            this.isSubmitting = false;
          }
        );
    } else {
      this.showSnackbar(this.translate.instant('FORMS.CONTACT_US.SUBMIT.INVALID'), 'error');
    }
  }

  private showSnackbar(message: string, type: 'success' | 'error'): void {
    this.snackBar.open(message, undefined, {
      duration: 5000,
      panelClass: type === 'success' ? 'snack-bar-success' : 'snack-bar-error',
    });
  }
}
