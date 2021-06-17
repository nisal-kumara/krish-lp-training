package com.nisal.vehicleservice.service;

import com.nisal.model.vehicle.Vehicle;
import com.nisal.vehicleservice.repository.VehicleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleServiceImpl implements VehicleService{

    @Autowired
    VehicleRepo vehicleRepo;

    @Override
    public Vehicle save(Vehicle customer) {

        return vehicleRepo.save(customer);
    }

    @Override
    public Vehicle findById(int id) {

        Optional<Vehicle> vehicle = vehicleRepo.findById(id);

        if (vehicle.isPresent())
            return vehicle.get();
        else
            return new Vehicle();
    }

    @Override
    public List<Vehicle> findAll() {

        return vehicleRepo.findAll();
    }
}
