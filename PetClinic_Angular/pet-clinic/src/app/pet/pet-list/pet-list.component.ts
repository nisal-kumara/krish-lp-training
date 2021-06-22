import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../services/pet.service';

import pets from "../pet-list/data/pets.json"
import { Pet } from './pets.model';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {

  title: string = 'Pet List'
  pets: Pet[] = pets;
  filteredPets: Pet[] = pets;
  private _refFilter: string = ''

  constructor(private router: Router, private petService: PetService) { }

  ngOnInit(): void {
  }

  set refFilter(value: string) {
    this._refFilter = value;
    this.filterByRef()
  }

  get refFilter(): string {
    return this._refFilter;
  }

  filterByRef() {
    this.filteredPets = this.pets.filter(pet => String(pet.refrenceNo).includes(this.refFilter))
  }

  addPet() {
    this.router.navigate(['addpet'])
  }

  updatePet(value: string) {
    this.router.navigate(['updatepet', value])
    // console.log(value)
  }

  deletePet(id: string) {
    this.petService.onDelete(+id);
    // console.log(id);
  }

}
