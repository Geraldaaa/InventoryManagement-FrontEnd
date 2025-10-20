import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // <-- Kjo mungon zakonisht

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})


export class Register {
  username = '';
  password = '';
  firstName = '';
  lastName = '';
  email = '';
  age!: number;
  phone = '';
  role = 'client';

  constructor(private router: Router) {}

  register() {
    // Frontend-only: ridrejto bazuar në role
    if(this.role === 'client') {
      this.router.navigate(['/dashboard/client']);
    } else if(this.role === 'manager') {
      this.router.navigate(['/dashboard/manager']);
    } else if(this.role === 'admin') {
      this.router.navigate(['/dashboard/admin']);
    }
  }
}
