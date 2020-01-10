import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { StoreModule } from '@ngrx/store';
import { ToDoReducer } from './todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ToDoEffects } from './to-do-effects.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ todos: ToDoReducer }),
    EffectsModule.forRoot([ToDoEffects])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
