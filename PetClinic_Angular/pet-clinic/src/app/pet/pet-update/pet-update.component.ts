import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../pet-list/pets.model';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pet-update',
  templateUrl: './pet-update.component.html',
  styleUrls: ['./pet-update.component.scss']
})
export class PetUpdateComponent implements OnInit {

  pet: Pet = {
    id: '',
    petName: '',
    petType: '',
    breed: '',
    refrenceNo: 0
  };

  id: any;

  constructor(private route: ActivatedRoute, private router: Router, private petService: PetService) { }

  ngOnInit(): void {

    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.pet = this.petService.onGetPet(this.id)!;
  }

  onSubmit(form: NgForm) {

    let pet: Pet = {
      id: this.id,
      petName: form.value.petName,
      petType: form.value.petType,
      breed: form.value.breed,
      refrenceNo: form.value.refrenceNo,
    }
    // console.log(pet);
    this.petService.onUpdate(pet);

    this.router.navigateByUrl('/pets');
  }

}
