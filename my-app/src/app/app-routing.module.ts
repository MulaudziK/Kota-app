import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import {MenuComponent} from './menu/menu.component';
// import {OrderComponent} from './order/order.component';


const routes: Routes = [
  {path: 'register' , component:RegisterComponent},
  {path: 'login' , component:LoginComponent},
  // {path: 'menu', component:MenuComponent},
  // {path: 'order', component:OrderComponent},
  {path: 'home' , component:HomeComponent},
  {path: 'footer' , component:FooterComponent},
  {path: 'header' , component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
