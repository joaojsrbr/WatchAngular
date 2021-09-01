import { LayoutModule } from "@angular/cdk/layout";
import { NgModule } from "@angular/core";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "src/app/app.routing.module";
import { FilmesModule } from "./filmes/filmes.module";
import { HomeComponent } from "./home.component";
import { RodapeComponent } from "./shared/components/rodape/rodape.component";
import { TopoComponent } from "./shared/components/topo/topo.component";
import { MaterialModule } from "./shared/material/material.module";

@NgModule({
    declarations: [
      HomeComponent,
      TopoComponent,
      RodapeComponent,
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      LayoutModule,
      MaterialModule,
      AppRoutingModule,
      FilmesModule
    ],
    exports:[
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        MaterialModule,
        AppRoutingModule,
        FilmesModule,
        HomeComponent,
        TopoComponent,
         RodapeComponent,

    ],
  })
  export class XdAppModule { }