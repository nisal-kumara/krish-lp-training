package com.nisal.customerservice.service;

import com.nisal.customerservice.repository.CustomerRepo;
import com.nisal.model.customer.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    CustomerRepo customerRepo;

    @Override
    public Customer save(Customer customer) {
        return customerRepo.save(customer);
    }

    @Override
    public Customer findById(int id) {
        Optional<Customer> customer = customerRepo.findById(id);

        if (customer.isPresent())
            return customer.get();
        else
            return new Customer();
    }

    @Override
    public List<Customer> findAll() {
        return customerRepo.findAll();
    }
}
