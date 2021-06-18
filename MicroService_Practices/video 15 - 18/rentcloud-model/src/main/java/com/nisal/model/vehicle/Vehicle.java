package com.nisal.model.vehicle;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="vehicle")
@Data
public class Vehicle {

    @Id
    @GeneratedValue
    int id;

    String make;
    String model;
    String type;
    int year;
    int odometerValueOnRegister;
    String color;
}
