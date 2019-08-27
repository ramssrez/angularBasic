import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule,Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
const appRoutes:Routes = [
  { path:'',component:HomeComponent},
  { path:'home',component:HomeComponent},
  { path:'login', component:LoginComponent},
  { path: 'conversation/:uid',component:ConversationComponent},
  { path: 'profile', component:ProfileComponent}
];

@NgModule({
  imports:      [ 
    BrowserModule, 
    RouterModule.forRoot(appRoutes),    FormsModule ],

  declarations: [ 
    AppComponent,
    HelloComponent, 
    LoginComponent,
    HomeComponent, 
    ConversationComponent,
    ProfileComponent, 
    MenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
