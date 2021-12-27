import { Component, OnInit, ViewChild } from '@angular/core';
import { ReceitasService } from 'src/app/services/receitas.service';
import { MatTableDataSource } from '@angular/material/table';
import { Receitas } from 'src/app/models/receita';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-receitaslist',
  templateUrl: './receitaslist.component.html',
  styleUrls: ['./receitaslist.component.css']
})
export class ReceitaslistComponent implements OnInit {

  ELEMENT_DATA: Receitas[] = [];

  displayedColumns: string[] = ['titulo','detalhes', 'deletar']; 
  dataSource = new MatTableDataSource<Receitas>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
 

  constructor(private service: ReceitasService) { }

  ngOnInit(): void {
    this.listAll();
  }

   listAll() {
     this.service.listAll().subscribe(resposta => {
       this.ELEMENT_DATA = resposta
       this.dataSource = new MatTableDataSource<Receitas>(resposta);
      this.dataSource.paginator = this.paginator;
     })
   }
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
