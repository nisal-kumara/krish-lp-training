package com.nisal.rentcloud.profileservice.repository;

import com.nisal.rentacloud.commons.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Integer>{

}
