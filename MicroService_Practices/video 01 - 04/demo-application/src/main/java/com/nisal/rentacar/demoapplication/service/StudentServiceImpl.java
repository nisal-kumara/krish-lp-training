package com.nisal.rentacar.demoapplication.service;

import com.nisal.rentacar.demoapplication.model.Student;
import com.nisal.rentacar.demoapplication.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    StudentRepository studentRepository;

    @Override
    public Student save(Student student) {
        return studentRepository.save(student);
    }


    public Student fetchStudentById(int id){
        //why use Optional? check video 004 -> 08:31
        Optional<Student> student = studentRepository.findById(id);
        if(student.isPresent()){
            return student.get();
        }else{
            return null;
        }
    }
}
