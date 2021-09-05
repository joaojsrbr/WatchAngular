import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilmesService } from '../../core/filmes.service';
import { ConfigParams } from '../../shared/models/config-params';
import { Filme } from '../../shared/models/filme';

@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

  config: ConfigParams = {
    pagina: 0,
    limite: 4,

  };
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



    this.filtrosListagem.get('texto').valueChanges.subscribe((val: string) => {
      this.config.pesquisa = val;
      this.resetarConsultar();
      
    });

    this.filtrosListagem.get('genero').valueChanges.subscribe((val: string) => {
      this.config.campo = {tipo: 'genero', valor: val};
      this.resetarConsultar();
    })



    this.generos = ['Ação','Romance','Aventura','Comédia','Comédia Romântica','Drama','Fantasia','Ficção Científica','Terror','Comédia Dramática'];

    
    this.listarFilmes();
  };

  onScroll(): void {
    this.listarFilmes();
}

  private listarFilmes(): void{
    this.config.pagina++;
    this.filmesService.listar(this.config)
    .subscribe((filmes: Filme[]) => this.filmes.push(...filmes));

  }

  private resetarConsultar(): void {
    this.config.pagina = 0;
    this.filmes = [];
    this.listarFilmes();
  }


}
