//import modules that will be used in the main app
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//forms module
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
//data services modul
import { DataService } from './services/data.service';
//http module
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
