import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';



@Component({
  selector: 'app-login',
  imports: [ FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username: string = '';
  password: string = '';
  role: string = 'client';
  submitted = false;


  constructor(private router: Router) {}

  validationMessages = {
    username:'',
    password: '',
    role:'',
  };

  onSubmit() {
    this.submitted = true;
    this.validateForm();

    if (this.isFormValid()) {
      console.log('Email', this.username);
      console.log('Password: ', this.password);
      alert('Form submitted successfully! Check console for data.');
      this.resetForm();
    } else {
      console.log('Form validation failed!');
    }
  }


  validateForm() {
    this.validationMessages = {
      username:'',
      password: '',
      role:'',
    };

    if (!this.username.trim()) {
      this.validationMessages.username = 'Name is required';
    } else if (this.username.trim().length < 6) {
      this.validationMessages.username = 'Name must be at least 6 characters';
    }

    if (!this.password) {
      this.validationMessages.password = 'Password is required';
    } else if (this.password.length < 8) {
      this.validationMessages.password = 'Password must be at least 8 characters';
    }
  }


  isFormValid(): boolean {
    return !this.validationMessages.username &&
      !this.validationMessages.password;
  }

  resetForm() {
    this.username='';
    this.password = '';
    this.submitted = false;
    this.validationMessages = {
      username:'',
      password: '',
      role:'',
    };
  }


  onUsernameChange(){
    if (this.username) {
      this.validateForm();
    }
  }

  onPasswordChange() {
    if (this.submitted) {
      this.validateForm();
    }
  }

  login() {

    if(this.role === 'client') {
      this.router.navigate(['/dashboard/client']);
    } else if(this.role === 'manager') {
      this.router.navigate(['/dashboard/manager']);
    } else if(this.role === 'admin') {
      this.router.navigate(['/dashboard/admin']);
    } else {
      alert('Invalid role!');
    }
  }



}
