import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmesModule } from './filmes/filmes.module';
import { CadastroFilmesComponent } from './filmes/cadastro-filmes/cadastro-filmes.component';
import { ListagemFilmesComponent } from './filmes/listagem-filmes/listagem-filmes.component';
import { AppModule } from './app.module';
import { SignInComponent } from './shared/components/login/login.component';

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
      {
        path:'/user/:userName',
        component: SignInComponent
      }
    ]
  },
  { path: '**', redirectTo: 'filmes' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    FilmesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
