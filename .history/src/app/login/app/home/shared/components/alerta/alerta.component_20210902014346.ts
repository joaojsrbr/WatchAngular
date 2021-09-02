import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  titulo =  'Sucesso!';
  descricao = 'Seu registro foi cadastrado com sucesso!';
  btnSucesso = 'OK';
  btnCancelar = 'Cancelar';

  constructor(
    public dialogRef: MatDialogRef<AlertaComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: any) { }

  ngOnInit(): void {
  }

}
