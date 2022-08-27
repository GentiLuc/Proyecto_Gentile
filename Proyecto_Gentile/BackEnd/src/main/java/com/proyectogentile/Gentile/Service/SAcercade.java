/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.proyectogentile.Gentile.Service;

import com.proyectogentile.Gentile.Entity.Acercade;
import com.proyectogentile.Gentile.Repository.RAcercade;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SAcercade {
    @Autowired
    RAcercade rAcercade;
    
    public List<Acercade> list(){
        return rAcercade.findAll();
        
    }
    
    public Optional<Acercade> getOne(int id) {
        return rAcercade.findById(id);
    }
    
    public Optional<Acercade>  getByNombreA(String nombreA){
        return rAcercade.findByNombreA(nombreA);
    }
    
    public void save(Acercade acercade){
         rAcercade.save(acercade);
     }
    
    public void delete(int id){
        rAcercade.deleteById(id);
    }
    
    public boolean existsById(int id){
        return rAcercade.existsById(id);
    }
    
    public boolean existsByNombreA (String nombreA){
        return rAcercade.existsByNombreA(nombreA);
    }
    
    
}
