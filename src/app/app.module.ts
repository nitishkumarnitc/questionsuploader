import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import { AddQuestionComponent } from './add-question/add-question.component';
import { AtomComponent } from './add-question/atom/atom.component';
import 'hammerjs';
import { NgUploaderModule } from 'ngx-uploader';


@NgModule({
  declarations: [
    AppComponent,
    AddQuestionComponent,
    AtomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    NgUploaderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
