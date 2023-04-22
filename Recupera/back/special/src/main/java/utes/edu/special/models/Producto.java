package utes.edu.special.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "producto")

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;
    private String nombre;
    private Double precio;



    @ManyToOne
    @JoinColumn(name = "id_fabricante", nullable = false, referencedColumnName = "id")
    private Fabricante fabricante;
}
