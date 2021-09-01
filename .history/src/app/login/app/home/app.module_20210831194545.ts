import { LayoutModule } from "@angular/cdk/layout";
import { NgModule } from "@angular/core";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "src/app/app.component";
import { AppRoutingModule } from "src/app/app.routing.module";
import { FilmesModule } from "./filmes/filmes.module";
import { RodapeComponent } from "./shared/components/rodape/rodape.component";
import { TopoComponent } from "./shared/components/topo/topo.component";
import { MaterialModule } from "./shared/material/material.module";

@NgModule({
    declarations: [
      AppComponent,
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
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt' }],
    bootstrap: [AppComponent]
  })
  export class AppModule { }