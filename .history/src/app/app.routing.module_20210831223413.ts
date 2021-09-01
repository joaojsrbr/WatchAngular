import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './login/app/home';
import { CadastroFilmesComponent } from './login/app/home/filmes/cadastro-filmes/cadastro-filmes.component';
import { FilmesModule } from './login/app/home/filmes/filmes.module';
import { ListagemFilmesComponent } from './login/app/home/filmes/listagem-filmes/listagem-filmes.component';
import { AuthGuard } from './login/app/_helpers';

const accountModule = () => import('./login/app/account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./login/app/users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: 'account', loadChildren: accountModule },
    { path: '', redirectTo: 'filmes', component:HomeComponent },


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
          { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
      
        ]
      },

      





    // otherwise redirect to home
    { path: '**', redirectTo: '' },

   
]
@NgModule({
    imports: [RouterModule.forRoot(routes),FilmesModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }
