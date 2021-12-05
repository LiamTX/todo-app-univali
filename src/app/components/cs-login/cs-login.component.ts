import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cs-login',
  templateUrl: './cs-login.component.html',
  styleUrls: ['./cs-login.component.scss']
})
export class CsLoginComponent implements OnInit {

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

    this.userService.auth(this.item).subscribe((resp: any) => {
      if (resp.token) {
        localStorage.setItem('token', resp.token);
        alert(`Seja Bem-Vindo(a) ${this.item.username}`);

        this.router.navigate(['home']);
      }
    }, err => {
      console.log(err);

      const { error } = err;

      if (error.message == 'User not found') {
        alert('Username não foi encontrado!');

        this.item = {
          username: '',
          password: ''
        }

        return;
      }

      if (error.message == 'unauthorized') {
        alert('Username ou Senha incorretos!');

        this.item = {
          username: '',
          password: ''
        }

        return;
      }

      alert('Erro interno');
    })
  }

}
