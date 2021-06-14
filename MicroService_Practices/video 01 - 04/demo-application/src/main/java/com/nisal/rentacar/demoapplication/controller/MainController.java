package com.nisal.rentacar.demoapplication.controller;

import com.nisal.rentacar.demoapplication.service.StudentService;
import com.nisal.rentacar.demoapplication.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class MainController {

    @Autowired
    StudentService studentService;

    @RequestMapping(value = "/page1", method = RequestMethod.GET)
    public String greeting(){
        return "Welcome to SpringBoot";
    }

    @RequestMapping(value = "/page1", method = RequestMethod.POST)
    public String greeting01(){
        return "A POST request";
    }

    @RequestMapping(value = "/student", method = RequestMethod.POST)
    public Student save(@RequestBody Student student){

        return studentService.save(student);
    }

    @RequestMapping(value = "/student", method = RequestMethod.GET)
    public ResponseEntity<Student> fetchStudent(@RequestParam int id){

        Student student = studentService.fetchStudentById(id);
        if(student == null){
            return ResponseEntity.notFound().build();
        }else{
            return ResponseEntity.ok().body(student);
        }
    }


}
