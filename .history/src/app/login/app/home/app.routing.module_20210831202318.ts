import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmesModule } from './filmes/filmes.module';
import { CadastroFilmesComponent } from './filmes/cadastro-filmes/cadastro-filmes.component';
import { ListagemFilmesComponent } from './filmes/listagem-filmes/listagem-filmes.component';
import { Error404Component } from './shared/components/error-404/error-404.component';
import { HomeComponent } from '.';
import { AuthGuard } from '../_helpers';

const accountModule = () => import('../account/account.module').then(x => x.AccountModule);
const usersModule = () => import('../users/users.module').then(x => x.UsersModule);

const routes: Routes = [

{
  path: 'filmes',
  children: [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
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

//{ path: '', redirectTo: 'filmes' },

{ path: 'filmes/404', component: Error404Component,  },

{ path: '', redirectTo: 'filmes/404' },

];
@NgModule({
    imports: [
      RouterModule.forRoot(routes),
      FilmesModule
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }