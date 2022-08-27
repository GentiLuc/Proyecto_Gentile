import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Acercade } from 'src/app/model/acercade';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { SAcercadeService } from 'src/app/service/s-acercade.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = new persona("","","");
  public img: any = "../../../assets/Perfil.jpg"
  acercade: Acercade[] = [];


  constructor(public personaService: PersonaService, private sAcercade: SAcercadeService, private tokenService: TokenService) { }

  

  isLogged = false;

  


  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
    this.cargarAcercade();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }



  cargarAcercade():void{
    this.sAcercade.lista().subscribe(data => {this.acercade = data;})
  
  }

  delete(id?: number){
    if(id != undefined){
      this.sAcercade.delete(id).subscribe(
        data => {
          this.cargarAcercade();
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
      this.img =reader.result; 
      
      
      // const document: any = {
      //   doc_nombre: event.target.files[0].name,
      //   doc_file: reader.result,
      //   doc_tipo_usuario: this.isUser ? 1 : 2,
      //   sol_id: this.requestId,
      // };
      // this.documentService.postDocument(document).subscribe((response) => {
      //   if (response.success) {
      //     this.snackBarService.snackBarSuccess(
      //       "Documento subido correctamente."
      //     );
      //     document.doc_id = response.id;
      //     this.documents$.next([...this.documents$.getValue(), ...[document]]);
      //     this.sendDocument(response.id);
      //   } else {
      //     this.snackBarService.snackBarError("Error al subir el documento.");
      //   }
      // });
    };
    
    
    
  }

}
