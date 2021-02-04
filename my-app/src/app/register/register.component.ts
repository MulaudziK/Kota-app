import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
//import { RegistrationService } from '../registration.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any = {
    
    email:'',
    confirmPassword:'',
    password:''
  };

  constructor() { }

  ngOnInit() {}
}
