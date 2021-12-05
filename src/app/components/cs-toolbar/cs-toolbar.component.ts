import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cs-toolbar',
  templateUrl: './cs-toolbar.component.html',
  styleUrls: ['./cs-toolbar.component.scss']
})
export class CsToolbarComponent implements OnInit {

  username: string | undefined = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username')?.toString();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');

    this.router.navigate(['login']);
  }

}
