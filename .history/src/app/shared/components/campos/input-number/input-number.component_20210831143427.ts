import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'dio-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent {

  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;


  constructor(public validacao: ValidarCamposService) { }

  get formControl(): AbstractControl {

    return  this.formGroup.controls[this.controlName];
  }

}
