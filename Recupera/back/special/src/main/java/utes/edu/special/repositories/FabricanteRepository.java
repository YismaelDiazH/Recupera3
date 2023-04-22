package utes.edu.special.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import utes.edu.special.models.Fabricante;

import java.util.List;

@Repository
public interface FabricanteRepository extends JpaRepository<Fabricante, Long> {

    Boolean existsByNombre(String name);
   @Query(
           value = "SELECT * FROM fabricante WHERE id >= 4", nativeQuery = true
   )
    List<Fabricante> findFabricanteById();

    @Query(
            value = "SELECT producto.* FROM producto JOIN fabricante ON producto.id_fabricante = fabricante.id WHERE fabricante.nombre = 'Asus'  OR fabricante.nombre = 'Hewlett-Packard' OR fabricante.nombre = 'Seagate'", nativeQuery = true

    )
    List<Fabricante> findFabricanteByNames();
    @Query(
            nativeQuery = true,value = "SELECT f.nombre, COUNT(p.id) FROM Fabricante f LEFT JOIN Producto p ON f.id = p.id_fabricante GROUP BY f.nombre"
            )
    List<Object[]> findAllFabricantesAndProductos();

    @Query(
            value = "SELECT f.nombre, COUNT(p.id) AS num_producto FROM Fabricante f LEFT JOIN Producto p ON f.id = p.id AND p.precio>= 220 GROUP BY f.id", nativeQuery = true
    )
    List<Object[]> findFabricantesAndProductosPrecio();

    @Query(
            value = "SELECT p.nombre, p.precio FROM producto p INNER JOIN (SELECT id_fabricante, AVG(precio) AS precio_medio FROM producto GROUP BY id_fabricante) pm ON p.id_fabricante = pm.id_fabricante WHERE p.precio >= pm.precio_medio", nativeQuery = true
    )
    List<Object[]> findPrecioPromedio();


}
