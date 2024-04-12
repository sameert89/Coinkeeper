import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

import { apiUri } from '../../utils/constants';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss',
})
export class LogoutComponent {
  constructor(private router: Router, private http: HttpClient) {}
  logout() {
    this.http.get(apiUri + 'auth/logout', { withCredentials: true }).subscribe({
      next: (response) => this.router.navigate(['/']),
      error: (error) => console.log(error),
    });
    this.router.navigate(['/']);
  }
}
