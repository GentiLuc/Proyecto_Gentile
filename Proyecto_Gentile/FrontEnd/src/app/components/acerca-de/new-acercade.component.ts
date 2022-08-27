import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acercade } from 'src/app/model/acercade';
import { SAcercadeService } from 'src/app/service/s-acercade.service';

@Component({
  selector: 'app-new-acercade',
  templateUrl: './new-acercade.component.html',
  styleUrls: ['./new-acercade.component.css']
})
export class NewAcercadeComponent implements OnInit {
  nombreA: string = '';
  tituloA: string = '';
  descripcionA: string = '';


  constructor(private sAcercade: SAcercadeService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    const acercade = new Acercade(this.nombreA, this.descripcionA, this.tituloA);
    this.sAcercade.save(acercade).subscribe(data=>{
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo");
      this.router.navigate(['']);
    }
    
    )
  } 

}


