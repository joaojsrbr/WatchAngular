import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmesModule } from './filmes/filmes.module';
import { CadastroFilmesComponent } from './filmes/cadastro-filmes/cadastro-filmes.component';
import { ListagemFilmesComponent } from './filmes/listagem-filmes/listagem-filmes.component';
import { Error404Component } from './shared/components/error-404/error-404.component';
import { loginComponentnovo } from './shared/components/login/login.component';


const routes: Routes = [



  {
      path: '',
      redirectTo: 'filmes',
      pathMatch: 'full'
  },
  {
    path: 'filmes',
    children: [
      {
        path: '',
        component: ListagemFilmesComponent
      },
      
      {
        path: 'cadastro',
        component: CadastroFilmesComponent,
        pathMatch: 'full'
      },
      
    ]
  },

  //{ path: '**', redirectTo: 'filmes' },

  { path: 'filmes/404', component: Error404Component,  },

  { path: '**', redirectTo: 'filmes/404' },

 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    FilmesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }