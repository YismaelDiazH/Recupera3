package utes.edu.special.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import utes.edu.special.models.Fabricante;
import utes.edu.special.services.FabricanteService;

import java.util.List;

@RestController
@RequestMapping("/fabricante")
@CrossOrigin(origins = {"*"})
public class FabricanteController {
    @Autowired
    FabricanteService service;


    @GetMapping("/findById")
    public ResponseEntity<List<Fabricante>> findFabricanteById(){
        List<Fabricante> fabricantes = service.findFabricanteById();
        return new ResponseEntity<>(fabricantes, HttpStatus.OK);
    }
    @GetMapping("/findByNames")
    public ResponseEntity<List<Fabricante>> findFabricanteByNames(){
        List<Fabricante> fabricantes = service.findFabricanteByNames();
        return new ResponseEntity<>(fabricantes, HttpStatus.OK);
    }

    @GetMapping("/findAllFabricantesAndProductos")
    public ResponseEntity<List<Object[]>> findAllFabricantesAndProductos(){
        List<Object[]> fabricantes = service.findAllFabricantesAndProductos();
        return new ResponseEntity<>(fabricantes, HttpStatus.OK);
    }

    @GetMapping("/findFabricantesAndProductosPrecio")
    public ResponseEntity<List<Object[]>> findFabricantesAndProductosPrecio(){
        List<Object[]> fabricantes = service.findFabricantesAndProductosPrecio();
        return new ResponseEntity<>(fabricantes, HttpStatus.OK);
    }

    @GetMapping("/findPrecioPromedio")
    public ResponseEntity<List<Object[]>> findPrecioPromedio(){
        List<Object[]> fabricantes = service.findPrecioPromedio();
        return new ResponseEntity<>(fabricantes, HttpStatus.OK);
    }

}
