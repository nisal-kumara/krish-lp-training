package com.nisal.rentservice.service;

import com.netflix.hystrix.HystrixCommand;
import com.nisal.model.customer.Customer;
import com.nisal.model.rent.Rent;
import com.nisal.model.vehicle.Vehicle;
import com.nisal.rentservice.hystrix.CommonHystrixCommand;
import com.nisal.rentservice.hystrix.VehicleCommand;
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
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

@Service
public class RentServiceImpl implements RentService{

    @Autowired
    RentRepo rentRepo;

    @Autowired
    HystrixCommand.Setter setter;

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
        if (rent.isPresent()) {
            return rent.get();
        }else {
            return new Rent();
        }
    }

    @Override
    public List<Rent> findAll() {
        return rentRepo.findAll();
    }

    //watch from here -> video 18 -> 08:00
    //@HystrixCommand(fallbackMethod = "findDetailResponseFallback")
    @Override
    public DetailResponse findDetailResponse(int id) throws ExecutionException, InterruptedException {

        //watch from here to understand -> video 15 -> 30:23
        Rent rent=findById(id);
        Customer customer=getCustomer(rent.getCustomerId());
//        Customer customer = restTemplate.getForObject("http://customer/services/customers/"+id,Customer.class);
        Vehicle vehicle= getVehicle(rent.getVehicleId());

        return new DetailResponse(rent,customer,vehicle);
    }

//    public DetailResponse findDetailResponseFallback(int id){
//        return new DetailResponse(new Rent(), new Customer(), new Vehicle());
//    }

    //the real method that need to protect with circuit breaker
    private Customer getCustomer(int customerId) throws ExecutionException, InterruptedException {

        //note -> video 18 -> 25:00
        CommonHystrixCommand<Customer> commonHysctrixCommand=new CommonHystrixCommand<Customer>(setter,()->
        {
            return restTemplate.getForObject("http://customer/services/customers/"+customerId,Customer.class);
        },()->{
            return new Customer();
        });

        Future<Customer> customerFuture=commonHysctrixCommand.queue();
        return customerFuture.get();
    }

    private Vehicle getVehicle(int vehicleId){

        VehicleCommand vehicleCommand = new VehicleCommand(restTemplate, vehicleId);
        return vehicleCommand.execute();
        //return restTemplate.getForObject("http://vehicle/services/vehicles/"+vehicleId,Vehicle.class);
    }
}
