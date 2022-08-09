
package com.proyectogentile.Gentile.Security.Repository;

import com.proyectogentile.Gentile.Security.Entity.Rol;
import com.proyectogentile.Gentile.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface iRolRepository extends JpaRepository<Rol, Integer>{
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}
