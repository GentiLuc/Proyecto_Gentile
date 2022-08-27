import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyectos[] = [];
  public img: any = "../../../assets/bannner2.png"


  constructor(private sProyectos: SProyectosService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarProyectos():void{
    this.sProyectos.lista().subscribe(data => {this.proyectos = data;})
  
  }

  delete(id?: number){
    if(id != undefined){
      this.sProyectos.delete(id).subscribe(
        data => {
          this.cargarProyectos();
        },err =>{
          alert("No se pudo borrar");
        }
      )
    }
  }

  onChange(event: any){
   
    const file = event.target.files[0];
   
    
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.img =reader.result;  }
    }

}