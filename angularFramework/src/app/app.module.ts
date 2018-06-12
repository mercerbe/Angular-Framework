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
import { AboutComponent } from './components/about/about.component';
//router module
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: UserComponent},
  {path: 'about', component:AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
