package com.nisal.rentservice.service;

import com.nisal.model.rent.Rent;
import com.nisal.rentservice.model.DetailResponse;

import java.util.List;
import java.util.concurrent.ExecutionException;

public interface RentService {

    Rent save(Rent customer);

    Rent findById(int id);

    List<Rent> findAll();

    DetailResponse findDetailResponse(int id) throws ExecutionException, InterruptedException;
}
