import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  name: string;
  email: string;
  age: number | null;
  password: string;
  birthdate: string;
  profileImage: File | null;
  termsAccepted: boolean;
  gender: string;
  country: string;
}

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: User = {
    name: '',
    email: '',
    age: null,
    password: '',
    birthdate: '',
    profileImage: null,
    termsAccepted: false,
    gender: '',
    country: ''
  };

  countries = ['India','USA', 'Canada', 'UK', 'Australia'];

  onSubmit() {
    console.log('User Information:', this.user);
  }

  onReset() {
    this.user = {
      name: '',
      email: '',
      age: null,
      password: '',
      birthdate: '',
      profileImage: null,
      termsAccepted: false,
      gender: '',
      country: ''
    };
  }

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log(`${input.name} changed to ${input.value}`);
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.user.profileImage = input.files[0];
    }
  }

  onFocus(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    console.log(`${input.name} is focused`);
  }

  onBlur(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    console.log(`${input.name} is blurred`);
  }
}
