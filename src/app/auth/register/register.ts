import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {
  username = '';
  password = '';
  firstName = '';
  lastName = '';
  email = '';
  age: number | null = null;
  phone = '';
  role = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const userData = {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      age: this.age,
      phoneNumber: this.phone,
      role: this.role
    };

    this.authService.register(userData).subscribe({
      next: async (res: any) => {
        console.log('Registration success:', res);

        // Ruaj të dhënat e përdoruesit në localStorage
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
        localStorage.setItem('username', res.username);

        alert(`Welcome, ${res.username}! Your account has been created.`);

        // Navigo sipas rolit
        const role = res.role;

        if (role === 'ROLE_ADMIN') {
          await this.router.navigate(['dashboard/admin']);
        } else if (role === 'ROLE_MANAGER') {
          await this.router.navigate(['/dashboard/manager']);
        } else {
          await this.router.navigate(['/dashboard/client']);
        }
      },
      error: (err) => {
        console.error('Registration failed', err);
        alert('Error during registration');
      }
    });
  }
}
