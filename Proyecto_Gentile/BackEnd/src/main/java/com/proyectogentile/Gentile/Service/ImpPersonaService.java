
package com.proyectogentile.Gentile.Service;

import com.proyectogentile.Gentile.Entity.Persona;
import com.proyectogentile.Gentile.Interface.IPersonaService;
import com.proyectogentile.Gentile.Repository.IPersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpPersonaService implements IPersonaService {
    @Autowired IPersonaRepository iperosnaRepository; 
    
    @Override
    public List<Persona> getPersona() {
      List<Persona> persona = iperosnaRepository.findAll();
      return persona;
    }

    @Override
    public void savePersona(Persona persona) {
       iperosnaRepository.save(persona);
    }

    @Override
    public void deletePersona(Long id) {
        iperosnaRepository.deleteById(id);
    }

    @Override
    public Persona findPersona(Long id) {
        Persona persona = iperosnaRepository.findById(id).orElse(null);
        return persona;
    }
    
    
}
