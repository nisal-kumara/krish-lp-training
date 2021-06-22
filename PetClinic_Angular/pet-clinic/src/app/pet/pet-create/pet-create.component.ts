import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../pet-list/pets.model';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.scss']
})
export class PetCreateComponent implements OnInit {

  id: any;

  constructor(private route: ActivatedRoute, private petService: PetService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    let pet: Pet = {
      id: "",
      petName: form.value.petName,
      petType: form.value.petType,
      breed: form.value.breed,
      refrenceNo: form.value.refrenceNo,
    }

    this.petService.onAdd(pet);

    this.router.navigateByUrl('/pets');
  }

}
