import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatRadioModule
} from "@angular/material";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsComponent } from "./forms/forms.component";
import { TestingComponent } from "./testing/testing.component";
import { SelectionComponent } from "./selection/selection.component";

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    TestingComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
