import { Component, OnInit } from '@angular/core';
import { Receitas } from 'src/app/models/receita';
import { ReceitasService } from 'src/app/services/receitas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-receitasincluir',
  templateUrl: './receitasincluir.component.html',
  styleUrls: ['./receitasincluir.component.css']
})
export class ReceitasincluirComponent implements OnInit {

  receita: Receitas = {
    id: '',
    titulo: '',
    ingredientes: '',
    modoPreparo: ''
  }

  titulo = new FormControl(null, Validators.minLength(4));
  ingredientes = new FormControl(null, Validators.minLength(4));
  modoPreparo = new FormControl(null, Validators.minLength(4));


  constructor(private service: ReceitasService,
    private router:          Router,
    private toast:    ToastrService,
    private route:   ActivatedRoute,) { }

    ngOnInit(): void { 
    }
  
    create(): void {
      this.service.create(this.receita).subscribe(() => {
        this.toast.success('Receita cadastrada com sucesso', 'Receita');
        this.router.navigate(['receitas'])
      }, ex => {
        if(ex.error.errors) {
          ex.error.errors.forEach((element: { message: string | undefined; }) => {
            this.toast.error(element.message);
          });
        } else {
          this.toast.error(ex.error.message);
        }
      })
    }

    validaCampos(): boolean {
      return this.titulo.valid && this.ingredientes.valid && this.modoPreparo.valid
    }

}
