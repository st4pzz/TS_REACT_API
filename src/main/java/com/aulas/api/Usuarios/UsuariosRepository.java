package com.aulas.api.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuariosRepository extends JpaRepository<Usuarios, Integer>{
    Usuarios findByIdentifier(String identifier);
}
