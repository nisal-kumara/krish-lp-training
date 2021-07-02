import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { Pet } from 'src/schemas/Pet.schema';
import { PetBreedValidationPipe } from './pet-breed-validation.pipe';
import { PetCreateDto } from './PetCreate.dto';
import { PetsService } from './pets.service';
import { PetSearchDto } from './petSearch.dto';
import { PetUpdateDto } from './PetUpdate.dto';

@Controller('pets')
export class PetsController {

    constructor(private petsService: PetsService) {

    }

    @Get()
    @UsePipes(ValidationPipe)
    async getAllPets(@Query() param: PetSearchDto): Promise<Pet[]> {
        if (Object.keys(param).length) {
            return this.petsService.petSearch(param);
        } else {
            return this.petsService.getAllPets();
        }
        //return await this.petsService.getAllPets();
    }

    @Post()
    //note -> video 03 -> 10:35
    @UsePipes(ValidationPipe)
    //watch again -> video 03 -> 13:20
    @UsePipes(new PetBreedValidationPipe())
    createPet(@Body() petCreateDto: PetCreateDto): Promise<Pet> {
        return this.petsService.createPets(petCreateDto)
    }

    @Get("/:id")
    getPetById(@Param("id") id: string): Promise<Pet> {
        return this.petsService.getPetById(id);
    }

    @Put("/:id/name")
    updatePet(@Param("id") id: string, @Body() petUpdateDto: PetUpdateDto): Promise<Pet> {
        petUpdateDto.id = id;
        return this.petsService.updatePet(petUpdateDto);
    }

    @Delete("/:id")
    //note -> video 02 -> 38:00
    @HttpCode(204)
    async deletePet(@Param("id") id: string) {
        let deleteO = await this.petsService.deletePet(id);
        if (!deleteO) {
            throw new NotFoundException('Pet Does Not Exist');
        }
    }
}
