import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnReactiveformsComponent } from './learn-reactiveforms/learn-reactiveforms.component';
import { AgeValidator } from './learn-reactiveforms/ValidatorFunction';
import { LearnTdformsComponent } from './learn-tdforms/learn-tdforms.component';

@NgModule({
  declarations: [
    AppComponent,
    LearnReactiveformsComponent,
    LearnTdformsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
