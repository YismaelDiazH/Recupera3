package utes.edu.special.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "fabricante")

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Fabricante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;
    @Column(nullable = false,length = 100)
    private String nombre;

    @OneToMany(mappedBy = "fabricante")
    @JsonIgnore
    private List<Producto> producto;


}
