import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
    templateUrl: './login.component.html',
 
})
export class loginComponentTs{


    form;




    constructor(privateformBuilder:FormBuilder) {

        this.criarForm();

    }

    criarForm(){

        this.form = this.formBuilder.group({

            email: [''],

            senha: ['']

        }):

    }

}