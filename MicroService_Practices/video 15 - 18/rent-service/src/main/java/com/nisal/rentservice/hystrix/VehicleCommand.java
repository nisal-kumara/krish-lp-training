package com.nisal.rentservice.hystrix;

import com.netflix.hystrix.HystrixCommand;
import com.netflix.hystrix.HystrixCommandGroupKey;
import com.nisal.model.vehicle.Vehicle;
import org.springframework.web.client.RestTemplate;

//note -> video 18 -> 12:33
public class VehicleCommand extends HystrixCommand<Vehicle> {

    RestTemplate restTemplate;
    int vehicleId;

    public VehicleCommand(RestTemplate restTemplate, int vehicleId) {

        super(HystrixCommandGroupKey.Factory.asKey("default"));
        this.restTemplate = restTemplate;
        this.vehicleId = vehicleId;
    }

    @Override
    protected Vehicle run() throws Exception {

        return restTemplate.getForObject("http://vehicle/services/vehicles/"+vehicleId, Vehicle.class);
    }

    @Override
    protected Vehicle getFallback() {
        System.out.println("check fallback +++++++++");
        return new Vehicle();
    }
}
