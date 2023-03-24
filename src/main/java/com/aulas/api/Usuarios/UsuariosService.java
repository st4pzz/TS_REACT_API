package com.aulas.api.Usuarios;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuariosService {
    @Autowired
    private UsuariosRepository UsuarioRepository;

    public Usuarios save(Usuarios usuario) {
        usuario.setIdentifier(UUID.randomUUID().toString());
        return UsuarioRepository.save(usuario);
    }

    public Iterable<Usuarios> findAll() {
        return UsuarioRepository.findAll();
    }

    public Usuarios findByIdentifier(String id) {
        return UsuarioRepository.findByIdentifier(id);
    }
   
}
