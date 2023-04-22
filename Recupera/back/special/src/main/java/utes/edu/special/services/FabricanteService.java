package utes.edu.special.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utes.edu.special.models.Fabricante;
import utes.edu.special.repositories.FabricanteRepository;

import java.util.List;

@Service
public class FabricanteService {
    @Autowired
    private FabricanteRepository repository;
    public List<Fabricante> findFabricanteById(){
        return repository.findFabricanteById();
    }
    public List<Fabricante> findFabricanteByNames(){
        return repository.findFabricanteByNames();
    }

    public List<Object[]> findAllFabricantesAndProductos(){
        return repository.findAllFabricantesAndProductos();
    }

    public List<Object[]> findFabricantesAndProductosPrecio(){
        return repository.findFabricantesAndProductosPrecio();
    }

    public List<Object[]> findPrecioPromedio(){
        return repository.findPrecioPromedio();
    }


}
