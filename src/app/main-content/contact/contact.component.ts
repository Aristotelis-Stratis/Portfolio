import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient)

  constructor(private translate: TranslateService) { }

  contactData = {
    name: '',
    email: '',
    message: '',
  }

  isPrivacyPolicyAccepted: boolean = false;
  mailTest: boolean = false;
  messageSent: boolean = false;

  post = {
    endPoint: 'https://aristotelis-stratis.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.messageSent = true;
            this.isPrivacyPolicyAccepted = false;
            setTimeout(() => this.messageSent = false, 5000);
          },
          error: (error) => {
            console.error(error);
          }
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.messageSent = true;
      this.isPrivacyPolicyAccepted = false;
      setTimeout(() => this.messageSent = false, 5000);

    }
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
