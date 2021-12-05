import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cs-register',
  templateUrl: './cs-register.component.html',
  styleUrls: ['./cs-register.component.scss']
})
export class CsRegisterComponent implements OnInit {

  loading = false;

  item = {
    username: '',
    email: '',
    password: ''
  };

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // Create user
  async register() {
    console.log(this.item);
    if (!this.item.username || !this.item.password) {
      alert('Preencha todos os campos');

      return;
    }

    this.loading = true;

    // Calling the userService with the create function
    this.userService.create(this.item).subscribe(resp => {
      console.log(resp);
      this.loading = false;

      this.item = {
        username: '',
        email: '',
        password: ''
      }

      alert('Cadastro efetuado com sucesso!');

      this.router.navigate(['login'])

    }, err => {
      // Error treatment
      this.loading = false;

      console.log(err);

      this.item = {
        username: '',
        email: '',
        password: ''
      }

      const { error } = err;

      if (error.message == 'Email or username already exists') {
        alert('Email ou Username já estão em uso!');

        return;
      }

      alert('Erro interno, tente novamente mais tarde!');
      return;
    });
  }
}
