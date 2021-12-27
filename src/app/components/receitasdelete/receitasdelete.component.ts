import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitasService } from 'src/app/services/receitas.service';
import { Receitas } from 'src/app/models/receita';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-receitasdelete',
  templateUrl: './receitasdelete.component.html',
  styleUrls: ['./receitasdelete.component.css']
})
export class ReceitasdeleteComponent implements OnInit {

  detalhe: Receitas = {
    id: '',
    titulo: '',
    ingredientes: '',
    modoPreparo: ''
  }
  constructor(private service: ReceitasService,
    private router:          Router,
    private toast:    ToastrService,
    private route:   ActivatedRoute,) { }

    ngOnInit(): void { 
      this.detalhe.id = this.route.snapshot.paramMap.get('id');
      this.findById();
    }

    findById() : void{
      this.service.listId(this.detalhe.id).subscribe(resposta => {
        this.detalhe = resposta;
      })
    }

    deletar(): void{
      this.service.delete(this.detalhe.id).subscribe(() => {
        this.toast.success('Receita deletada com sucesso', 'Receita');
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
}
