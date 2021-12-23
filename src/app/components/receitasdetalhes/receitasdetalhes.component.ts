import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Receitas } from 'src/app/models/receita';
import { ReceitasService } from 'src/app/services/receitas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receitasdetalhes',
  templateUrl: './receitasdetalhes.component.html',
  styleUrls: ['./receitasdetalhes.component.css']
})
export class ReceitasdetalhesComponent implements OnInit {
  
  detalhe: Receitas = {
    id: '',
    titulo: '',
    ingredientes: '',
    modoPreparo: ''
  }
 

  constructor(private service: ReceitasService,
    private router:          Router,
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
}
 