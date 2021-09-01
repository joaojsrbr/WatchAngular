import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CamposModule } from "../shared/components/campos/campos.module";
import { MaterialModule } from "../shared/material/material.module";
import { CadastroFilmesComponent } from "./cadastro-filmes/cadastro-filmes.component";
import { ListagemFilmesComponent } from "./listagem-filmes/listagem-filmes.component";


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CamposModule
  ],
  declarations: [CadastroFilmesComponent, ListagemFilmesComponent]
})
export class FilmesModule { }