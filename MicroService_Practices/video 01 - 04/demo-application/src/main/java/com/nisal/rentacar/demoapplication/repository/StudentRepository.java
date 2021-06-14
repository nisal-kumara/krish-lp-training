package com.nisal.rentacar.demoapplication.repository;

import com.nisal.rentacar.demoapplication.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Integer> {

//    Student save(Student student);
}
