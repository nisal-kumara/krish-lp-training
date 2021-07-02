import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid'
import { PetSearchDto } from './petSearch.dto';
import { PetUpdateDto } from './PetUpdate.dto';
import { PetCreateDto } from './PetCreate.dto';
import { Pet } from 'src/schemas/Pet.schema';
import { PetRepository } from './Pet.repository';

@Injectable()
export class PetsService {

    //private pets: Pet[] = [];
    constructor(private petRepository: PetRepository) { }

    async getAllPets(): Promise<Pet[]> {
        return await this.petRepository.findAll();
    }

    async createPets(petCreateDto: PetCreateDto): Promise<Pet> {
        //note -> video 04 -> 24:00
        return await this.petRepository.create(petCreateDto);
    }

    petSearch(petSearchDto: PetSearchDto) {
        return this.petRepository.filterPets(petSearchDto);
    }

    getPetById(id: string): Promise<Pet> {
        let pet = this.petRepository.findById(id)
        //must watch -> video 03 -> 22:44
        if (!pet) {
            throw new NotFoundException(`${id} Is Not Exist`)
        }
        return pet;
    }

    updatePet(petUpdateDto: PetUpdateDto): Promise<Pet> {
        return this.petRepository.update(petUpdateDto);
    }

    async deletePet(id: string): Promise<boolean> {
        let deleteO = await this.petRepository.delete(id);
        return deleteO;
    }
}
