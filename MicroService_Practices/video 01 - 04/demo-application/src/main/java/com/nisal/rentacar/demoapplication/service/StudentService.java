package com.nisal.rentacar.demoapplication.service;

import com.nisal.rentacar.demoapplication.model.Student;

public interface StudentService {

    Student save(Student student);

    Student fetchStudentById(int id);
}
