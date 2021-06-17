package com.nisal.model.customer;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "customer")
//reason for using lombok -> video 15 -> 15:57
@Data
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    private String fName;
    private String lName;
    private String dlNumber;
    private String zipcode;

    @OneToMany(mappedBy = "customer")
    private List<Loyality> loyalities;
}
