import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cs-register',
  templateUrl: './cs-register.component.html',
  styleUrls: ['./cs-register.component.scss']
})
export class CsRegisterComponent implements OnInit {

  item = {
    username: '',
    email: '',
    password: ''
  };

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  async register() {
    console.log(this.item);
    if (!this.item.username || !this.item.password) {
      alert('Preencha todos os campos');

      return;
    }

    this.userService.create(this.item).subscribe(resp => {
      console.log(resp);
    }, err => {
      console.log(err);

      const { error } = err;

      if (error.message == 'Email or username already exists') {
        alert('Email ou Username já estão em uso!');

        return;
      }
    });
  }
}
