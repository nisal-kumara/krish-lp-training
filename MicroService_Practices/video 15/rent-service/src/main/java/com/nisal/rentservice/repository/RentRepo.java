package com.nisal.rentservice.repository;

import com.nisal.model.rent.Rent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentRepo extends JpaRepository<Rent,Integer> {
}
