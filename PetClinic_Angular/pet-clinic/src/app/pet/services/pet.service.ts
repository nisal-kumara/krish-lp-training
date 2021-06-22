import { Injectable } from '@angular/core';
import { Pet } from '../pet-list/pets.model';
import pets from '../pet-list/data/pets.json'

@Injectable({
  providedIn: 'root'
})
export class PetService {

  pets: Pet[] = pets;

  constructor() { }

  onGet() {
    return this.pets;
  }

  //for update a pet
  onGetPet(id: string) {
    return this.pets.find(x => x.id === id)
  }

  onAdd(pet: Pet) {
    //Generating ID for new pet
    pet.id = pets.length + 1;
    this.pets.push(pet);
    // console.log(pets.length)
  }

  onDelete(id: number) {
    let pet = this.pets.find(x => (Number)(x.id) === id)!; //non-null assertion operator
    let index = this.pets.indexOf(pet, 0);
    this.pets.splice(index, 1);
  }

  onUpdate(pet: Pet) {
    let oldpet = this.pets.find(x => x.id === pet.id)!;
    oldpet.petName = pet.petName;
    oldpet.petType = pet.petType;
    oldpet.breed = pet.breed;
    oldpet.refrenceNo = pet.refrenceNo;
  }
}
