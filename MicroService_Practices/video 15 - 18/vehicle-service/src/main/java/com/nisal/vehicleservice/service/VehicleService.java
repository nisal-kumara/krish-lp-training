package com.nisal.vehicleservice.service;

import com.nisal.model.vehicle.Vehicle;

import java.util.List;

public interface VehicleService {

    Vehicle save(Vehicle customer);

    Vehicle findById(int id);

    List<Vehicle> findAll();
}
