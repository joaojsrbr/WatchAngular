import { LayoutModule } from "@angular/cdk/layout";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "src/app/app.routing.module";
import { AlertComponent } from "../_components/alert.component";
import { FilmesModule } from "./filmes/filmes.module";
import { HomeComponent } from "./home.component";
import { RodapeComponent } from "./shared/components/rodape/rodape.component";
import { TopoComponent } from "./shared/components/topo/topo.component";
import { MaterialModule } from "./shared/material/material.module";

@NgModule({
    declarations: [
      HomeComponent,
      RodapeComponent,
      TopoComponent,
      AlertComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      LayoutModule,
      AppRoutingModule,
      FilmesModule,
      MaterialModule
      
     
      
      
      
    ],
    exports:[
    TopoComponent,
    AlertComponent,
    MaterialModule

    ]
    
  })
  export class XdAppModule { }