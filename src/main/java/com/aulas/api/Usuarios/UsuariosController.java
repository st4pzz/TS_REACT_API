package com.aulas.api.Usuarios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/usuarios")
public class UsuariosController {
    @Autowired
    private UsuariosService usuarioService;

    @CrossOrigin
    @GetMapping
    public Iterable<Usuarios>findAll() {
        return usuarioService.findAll();
    }
    @CrossOrigin
    @PostMapping
    public Usuarios save(@RequestBody @Valid Usuarios usuario) {
        return usuarioService.save(usuario);
    }

    @GetMapping("/{identifier}")
    public Usuarios findByIdentifier(@PathVariable String identifier) {
        return usuarioService.findByIdentifier(identifier);
    }
    
}
