import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule
} from "@angular/material";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsComponent } from "./forms/forms.component";

@NgModule({
  declarations: [AppComponent, FormsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
