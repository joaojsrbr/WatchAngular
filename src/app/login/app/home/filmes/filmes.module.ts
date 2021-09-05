import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { CamposModule } from "../shared/components/campos/campos.module";
import { Error404Component } from "../shared/components/error-404/error-404.component";
import { MaterialModule } from "../shared/material/material.module";
import { CadastroFilmesComponent } from "./cadastro-filmes/cadastro-filmes.component";
import { ListagemFilmesComponent } from "./listagem-filmes/listagem-filmes.component";
import { VisualizarFilmesComponent } from './visualizar-filmes/visualizar-filmes.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CamposModule,
    InfiniteScrollModule,
   
    
  ],
  declarations: [CadastroFilmesComponent, ListagemFilmesComponent, VisualizarFilmesComponent, Error404Component]
})
export class FilmesModule { }
