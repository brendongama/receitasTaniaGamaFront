import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitaslistComponent } from './components/receitaslist/receitaslist.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ReceitasincluirComponent } from './components/receitasincluir/receitasincluir.component';
import { ReceitasdetalhesComponent } from './components/receitasdetalhes/receitasdetalhes.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
      { path: 'receitas', component: ReceitaslistComponent },
      { path: 'receitas/incluir', component: ReceitasincluirComponent },
      { path: 'receitas/detalhes/:id', component: ReceitasdetalhesComponent }
    ]
  } 
];
  
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
