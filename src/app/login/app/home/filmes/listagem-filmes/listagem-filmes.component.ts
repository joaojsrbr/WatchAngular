import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilmesService } from '../../core/filmes.service';
import { Filme } from '../../shared/models/filme';

@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

  readonly qtdPagina = 4;
  pagina = 0;
  filmes: Filme[] = [];
  filtrosListagem: FormGroup;
  generos: Array<string>;

  constructor(
    private filmesService: FilmesService,
    private fb: FormBuilder) { }

  ngOnInit(): void{
    this.filtrosListagem =  this.fb.group({
       texto: [''], 
       genero: ['']

    });

    this.generos = ['Ação','Romance','Aventura','Comédia','Comédia Romântica','Drama','Fantasia','Ficção Científica','Terror','Comédia Dramática'];

    
    this.listarFilmes();
  };

  onScroll(): void {
    this.listarFilmes();
}

  private listarFilmes(): void{
    this.pagina++;
    this.filmesService.listar(this.pagina, this.qtdPagina)
    .subscribe((filmes: Filme[]) => this.filmes.push(...filmes));

  }


}
