package com.nisal.rentservice.service;

import com.nisal.model.customer.Customer;
import com.nisal.model.rent.Rent;
import com.nisal.model.vehicle.Vehicle;
import com.nisal.rentservice.model.DetailResponse;
import com.nisal.rentservice.repository.RentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@Service
public class RentServiceImpl implements RentService{

    @Autowired
    RentRepo rentRepo;

    //note -> video 17 -> 11:00
    @LoadBalanced
    @Bean
    RestTemplate getRestTemplate(RestTemplateBuilder builder){
        return builder.build();
    }

    @Autowired
    RestTemplate restTemplate;

    @Override
    public Rent save(Rent customer) {
        return rentRepo.save(customer);
    }

    @Override
    public Rent findById(int id) {

        Optional<Rent> rent = rentRepo.findById(id);

        if (rent.isPresent())
            return rent.get();
        else
            return new Rent();
    }

    @Override
    public List<Rent> findAll() {
        return rentRepo.findAll();
    }

    @Override
    public DetailResponse findDetailResponse(int id) {

        //watch from here to understand -> video 15 -> 30:23
        Rent rent=findById(id);
        Customer customer=getCustomer(rent.getCustomerId());
        Vehicle vehicle= getVehicle(rent.getVehicleId());

        return new DetailResponse(rent,customer,vehicle);
    }

    private Customer getCustomer(int customerId){

        //watch again from here -> video 17 -> 13:00
        Customer customer=restTemplate.getForObject("http://customer/services/customers/"+customerId,Customer.class);
        return customer;
    }

    private Vehicle getVehicle(int vehicleId){

        return restTemplate.getForObject("http://vehicle/services/vehicles/"+vehicleId,Vehicle.class);
    }
}
