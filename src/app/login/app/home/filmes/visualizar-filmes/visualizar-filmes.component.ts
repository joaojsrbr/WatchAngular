import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmesService } from '../../core/filmes.service';
import { AlertaComponent } from '../../shared/components/alerta/alerta.component';
import { Alerta } from '../../shared/models/alerta';
import { Filme } from '../../shared/models/filme';

@Component({
  selector: 'app-visualizar-filmes',
  templateUrl: './visualizar-filmes.component.html',
  styleUrls: ['./visualizar-filmes.component.css']
})
export class VisualizarFilmesComponent implements OnInit {
  readonly semFoto = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';
  filme: Filme;
  id: number;

  constructor(public dialog: MatDialog,
              private ar: ActivatedRoute,
              private router: Router,
              private filmesService: FilmesService
                                                   ) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id'];
   this.visualizar();
  }

  editar(): void{

    this.router.navigateByUrl('/filmes/cadastro/' + this.id)
  }

  excluir(): void{
    const config ={
      data:{
        titulo: 'Você tem certeza  que deseja excruir?',
        descricao: 'Caso você tenha certeza que deseja excluir, clique no botão OK',
        possuirBtnFechar: true,
        corBtnSucesso: 'warn',
        corBtnCancelar: 'primary',
      }as Alerta
    };
    const dialogRef = this.dialog.open(AlertaComponent, config)
    dialogRef.afterClosed().subscribe((opcao: boolean) => {
      if (opcao) {
        this.filmesService.excluir(this.id)
        .subscribe(() => this.router.navigateByUrl('filmes'));
      }
    })}
  

  private visualizar(): void{
    this.filmesService.visualizar(this.id)
    .subscribe((filme: Filme) => this.filme = filme);
  }
}
