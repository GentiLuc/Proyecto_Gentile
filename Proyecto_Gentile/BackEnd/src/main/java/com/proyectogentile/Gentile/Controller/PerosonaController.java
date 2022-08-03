/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.proyectogentile.Gentile.Controller;

import com.proyectogentile.Gentile.Entity.Persona;
import com.proyectogentile.Gentile.Interface.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PerosonaController {

    @Autowired
    IPersonaService ipersonaService;

    @GetMapping("perosnas/traer")
    public List<Persona> getPersona() {
        return ipersonaService.getPersona();
    }

    @PostMapping("perosnas/crear")
    public String createPersona(@RequestBody Persona persona) {
        ipersonaService.savePersona(persona);
        return "La persona fue creada correctamente";
    }

    @DeleteMapping("/persona/borrar/(id)")
    public String deletePersona(@PathVariable Long id) {
        ipersonaService.deletePersona(id);
        return "La persona fue eliminada correctamente";
    }

    @PutMapping("/persona/editar/(id)")
    public Persona editPersona(@PathVariable Long id,
                               @RequestParam("nombre")String nuevoNombre,
                               @RequestParam("apellido")String nuevoApellido,
                               @RequestParam("img")String nuevoImg){
        Persona persona =  ipersonaService.findPersona(id);
        persona.setNombre(nuevoNombre);
        persona.setApellido(nuevoApellido);
        persona.setImg(nuevoImg);
        
        ipersonaService.savePersona(persona);
        return persona;


    }
 
}
