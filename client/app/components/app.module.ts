import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import  {FormsModule} from '@angular/forms';
import {TasksComponent} from './Components/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent, TasksComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
