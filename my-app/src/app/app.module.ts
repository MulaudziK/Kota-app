import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';

import {ConfirmEqualValidatorDirective} from './shared/confirm-equal-validator.directive';
import {CapCheckValidatorDirective} from './shared/cap-check-validator.directive';
import {LowerCheckValidatorDirective} from './shared/low-check-validator.directive';
import {DigitCheckValidatorDirective} from './shared/digit-check-validator.directive';
import {CheckMinimumValidatorDirective} from './shared/check-minimum-validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
//import { User } from './user';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmEqualValidatorDirective,
    CapCheckValidatorDirective,
    LowerCheckValidatorDirective,
    DigitCheckValidatorDirective,
    CheckMinimumValidatorDirective,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
