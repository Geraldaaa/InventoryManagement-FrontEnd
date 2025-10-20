import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  username = '';
  password = '';
  role = 'client';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const loginData = {
      username: this.username,
      password: this.password
    };

    this.authService.login(loginData).subscribe({
      next: async (res: any) => {
        console.log('Login success:', res);

        // Ruaj të dhënat në localStorage
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
        localStorage.setItem('username', res.username);

        alert(`Welcome back, ${res.username}!`);

        // ✅ Redirect sipas rolit
        const role = res.role; // <-- këtu ishte gabimi (ke përdorur "response" në vend të "res")

        if (role === 'ROLE_ADMIN') {
          await this.router.navigate(['/dashboard/admin']);
        } else if (role === 'ROLE_MANAGER') {
          await this.router.navigate(['/dashboard/manager']);
        } else {
          await this.router.navigate(['/dashboard/client']);
        }
      },
      error: (err) => {
        console.error('Login failed', err);
        alert('Invalid username or password');
      }
    });
  }
}
