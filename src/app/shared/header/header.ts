import { Component, OnInit } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header implements OnInit {

  isLoggedIn: boolean = false;
  role: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');   // ruan token JWT nga backend
    const storedRole = localStorage.getItem('role'); // ruan rolin e përdoruesit
    this.isLoggedIn = !!token;
    this.role = storedRole || '';
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.isLoggedIn = false;
    this.role = '';
    this.router.navigate(['/login']);
  }
}
