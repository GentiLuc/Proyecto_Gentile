import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = new persona("","","");
  public img: any = "../../../assets/Perfil.jpg"


  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
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
