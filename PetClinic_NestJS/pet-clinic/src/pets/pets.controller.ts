import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { PetBreed, PetType } from './pet.model';
import { PetsService } from './pets.service';
import { PetUpdateDto } from './PetUpdate.dto';

@Controller('pets')
export class PetsController {

    constructor(private petsService: PetsService) {

    }

    @Get()
    getAllPets() {

        return this.petsService.getAllPets();
    }

    @Post()
    createPet(@Body('petName') petName: string,
        @Body('petType') petType: PetType,
        @Body('breed') breed: PetBreed,
        @Body('refrenceNo') refrenceNo: number,) {

        return this.petsService.createPets(petName, petType, breed, refrenceNo)
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
