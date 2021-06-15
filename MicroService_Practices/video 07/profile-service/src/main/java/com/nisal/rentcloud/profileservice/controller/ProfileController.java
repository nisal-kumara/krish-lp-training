package com.nisal.rentcloud.profileservice.controller;

import com.nisal.rentacloud.commons.model.Customer;
import com.nisal.rentcloud.profileservice.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/services")
public class ProfileController {

    @Autowired
    CustomerService customerService;

    @RequestMapping(value = "/profile", method = RequestMethod.POST)
    public Customer save(@RequestBody Customer customer){
        return customerService.save(customer);
    }
}
