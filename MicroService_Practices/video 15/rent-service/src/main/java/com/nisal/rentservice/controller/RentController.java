package com.nisal.rentservice.controller;

import com.nisal.model.rent.Rent;
import com.nisal.rentservice.model.Response;
import com.nisal.rentservice.model.SimpleResponse;
import com.nisal.rentservice.service.RentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/services/rents")
public class RentController {

    @Autowired
    RentService rentService;

    @PostMapping
    public Rent save(@RequestBody Rent rent) {

        return rentService.save(rent);
    }

    //watch from here -> video 15 -> 29:10
    @GetMapping(value = "/{id}")
    public Response getRent(@PathVariable int id, @RequestParam(required = false) String type) {

        if(type==null){
            return new SimpleResponse(rentService.findById(id));
        }else{
            return rentService.findDetailResponse(id);
        }
    }

    @GetMapping
    public List<Rent> getAllRents() {

        return rentService.findAll();
    }
}
