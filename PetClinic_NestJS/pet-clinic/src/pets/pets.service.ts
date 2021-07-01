import { Injectable, NotFoundException } from '@nestjs/common';
import { Pet, PetBreed, PetType } from './pet.model';
import { v1 as uuid } from 'uuid'
import { PetSearchDto } from './petSearch.dto';
import { PetUpdateDto } from './PetUpdate.dto';
import { PetCreateDto } from './PetCreate.dto';

@Injectable()
export class PetsService {

    private pets: Pet[] = [];

    getAllPets() {
        return this.pets;
    }

    createPets(petCreateDto: PetCreateDto) {
        const { petName, petType, breed, refrenceNo } = petCreateDto

        const pet = {
            id: uuid(),
            petName,
            petType,
            breed,
            refrenceNo
        }
        this.pets.push(pet);
        return pet;
    }

    petSearch(petSearchDto: PetSearchDto) {
        const { type, breed } = petSearchDto;
        let pets = this.getAllPets();

        if (type) {
            pets = pets.filter(pet => pet.petType === type);
        }
        if (breed) {
            pets = pets.filter(pet => pet.breed === breed);
        }
        return pets;
    }

    getPetById(id: string): Pet {
        const pets = this.getAllPets();
        let pet = pets.find(pet => pet.id === id);
        //must watch -> video 03 -> 22:44
        if (!pet) {
            throw new NotFoundException(`${id} is Not Exist`)
        }
        return pet;
    }

    updatePet(petUpdateDto: PetUpdateDto): Pet {
        const { id, name } = petUpdateDto
        //note -> video 02 -> 27:25
        let pet = this.getPetById(id);
        pet.petName = name;
        return pet;
    }

    deletePet(id: string): boolean {
        let pets = this.getAllPets();
        this.pets = pets.filter(pet => pet.id != id);
        return (pets.length != this.pets.length)
    }
}
