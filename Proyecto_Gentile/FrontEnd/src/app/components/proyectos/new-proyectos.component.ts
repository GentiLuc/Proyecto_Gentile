import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {
  nombreP: string = '';
  descripcionP: string = '';


  constructor(private sProyectos: SProyectosService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    const proyectos = new Proyectos(this.nombreP, this.descripcionP);
    this.sProyectos.save(proyectos).subscribe(data=>{
      alert("Proyectos añadido");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo");
      this.router.navigate(['']);
    }
    
    )
  } 

}
