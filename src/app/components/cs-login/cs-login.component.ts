import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cs-login',
  templateUrl: './cs-login.component.html',
  styleUrls: ['./cs-login.component.scss']
})
export class CsLoginComponent implements OnInit {

  loading = false;

  item = {
    username: '',
    password: ''
  };

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    if (!this.item.username || !this.item.password) {
      alert('Preencha todos os campos!');

      return;
    }

    this.loading = true;

    this.userService.auth(this.item).subscribe((resp: any) => {
      if (resp.token) {
        localStorage.setItem('token', resp.token);
        localStorage.setItem('username', this.item.username);

        alert(`Seja Bem-Vindo(a) ${this.item.username}`);

        this.loading = false;

        this.router.navigate(['home']);
      }
    }, err => {
      this.loading = false;

      console.log(err);

      this.item = {
        username: '',
        password: ''
      }

      const { error } = err;

      if (error.message == 'User not found') {
        alert('Username não foi encontrado!');

        return;
      }

      if (error.message == 'unauthorized') {
        alert('Username ou Senha incorretos!');

        return;
      }

      alert('Erro interno');
    })
  }

}
