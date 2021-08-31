import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    templateUrl: './login.component.html',
 
})
export class loginComponentnovo {


    form: FormGroup;




    constructor(private formBuilder:FormBuilder) {

        this.criarForm();

    }

    criarForm(){

        this.form = this.formBuilder.group({

            email: [''],

            senha: ['']

        })

    }
    

}