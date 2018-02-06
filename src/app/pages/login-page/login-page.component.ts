import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { error } from 'util';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [DataService]
})
export class LoginPageComponent implements OnInit {

  resultado : any[] = [];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getCourses().subscribe(result =>
        {
          this.resultado = result;
          console.log(this.resultado);
        },
        error =>{
          console.log(error);
        });
  
  }

}
