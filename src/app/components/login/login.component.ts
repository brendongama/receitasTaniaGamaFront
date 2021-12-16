import { Component, OnInit } from '@angular/core';
import { Credenciais } from 'src/app/models/credenciais';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credenciais = {
    login:'',
    senha: ''
  }

  login = new FormControl(null, Validators.minLength(3));
  senha = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: AuthService, 
    private toast: ToastrService,
    private router: Router) { }

  ngOnInit(): void {}

  logar() {
    this.service.authenticate(this.creds).subscribe(resposta => {      
      let returnAuthentication = resposta.headers.get('Authorization') as string;
      this.service.succesFullLogin(returnAuthentication.substring(7));
      this.router.navigate(['']);
    }, () => {
      this.toast.error('Usuário e/ou senha inválidos');
    } ) 
  }

  validaCampos(): boolean {
    return this.login.valid && this.senha.valid;    
  }

}
