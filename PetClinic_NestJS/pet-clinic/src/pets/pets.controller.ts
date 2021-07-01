import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { PetBreedValidationPipe } from './pet-breed-validation.pipe';
import { PetBreed, PetType } from './pet.model';
import { PetCreateDto } from './PetCreate.dto';
import { PetsService } from './pets.service';
import { PetUpdateDto } from './PetUpdate.dto';

@Controller('pets')
export class PetsController {

    constructor(private petsService: PetsService) {

    }

    @Get()
    @UsePipes(ValidationPipe)
    getAllPets() {
        return this.petsService.getAllPets();
    }

    @Post()
    //note -> video 03 -> 10:35
    @UsePipes(ValidationPipe)
    //watch again -> video 03 -> 13:20
    @UsePipes(new PetBreedValidationPipe())
    createPet(@Body() petCreateDto: PetCreateDto) {
        return this.petsService.createPets(petCreateDto)
    }

    @Get("/:id")
    getPetById(@Param("id") id: string) {
        return this.petsService.getPetById(id);
    }

    @Put("/:id/name")
    updatePet(@Param("id") id: string, @Body() petUpdateDto: PetUpdateDto) {
        petUpdateDto.id = id;
        return this.petsService.updatePet(petUpdateDto);
    }

    @Delete("/:id")
    //note -> video 02 -> 38:00
    @HttpCode(204)
    deletePet(@Param("id") id: string) {
        if (!this.petsService.deletePet(id)) {
            throw new NotFoundException('Pet Does Not Exist');
        }
    }
}
