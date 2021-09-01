import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { HomeComponent } from "./login/app/home";
import { AlertComponent } from "./login/app/_components";
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from "./login/app/_helpers";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  XdAppModule } from "./login/app/home/app.module";


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        XdAppModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };