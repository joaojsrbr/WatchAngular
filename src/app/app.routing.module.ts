import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './login/app/home';
import { CadastroFilmesComponent } from './login/app/home/filmes/cadastro-filmes/cadastro-filmes.component';

import { ListagemFilmesComponent } from './login/app/home/filmes/listagem-filmes/listagem-filmes.component';
import { VisualizarFilmesComponent } from './login/app/home/filmes/visualizar-filmes/visualizar-filmes.component';

import { AuthGuard } from './login/app/_helpers';

const accountModule = () => import('./login/app/account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./login/app/users/users.module').then(x => x.UsersModule);

const routes: Routes = [
  { path: '', redirectTo: 'filmes',  pathMatch: 'full'},

    {path: 'filmes', component: HomeComponent, canActivate: [AuthGuard], children:[
        {
            path: '',
            component: ListagemFilmesComponent,
            canActivate: [AuthGuard]
          },
          
          {
            path: 'cadastro',
            canActivate: [AuthGuard],
            children:[
              {
                path:'',component: CadastroFilmesComponent,
               
              },
              {
                path:':id',component: CadastroFilmesComponent,
               
              },
            ]
          },
          {
            path: ':id', 
            component: VisualizarFilmesComponent,
            pathMatch:'full'
            
        },
         
          { path: 'user', loadChildren: usersModule, canActivate: [AuthGuard] },
          
          
    ]},
    { path: 'account', loadChildren: accountModule },

 


    
     

      





    // otherwise redirect to home
    //{ path: '**', redirectTo: '' },

   
];
@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
})
export class AppRoutingModule { }
