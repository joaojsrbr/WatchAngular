import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './login/app/home';
import { AuthGuard } from './login/app/_helpers';

const accountModule = () => import('./login/app/account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./login/app/users/users.module').then(x => x.UsersModule);

const routes: Routes = [
   

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
