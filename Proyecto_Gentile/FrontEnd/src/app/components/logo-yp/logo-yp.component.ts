import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-yp',
  templateUrl: './logo-yp.component.html',
  styleUrls: ['./logo-yp.component.css']
})
export class LogoYPComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate(['/login'])
  }
}
