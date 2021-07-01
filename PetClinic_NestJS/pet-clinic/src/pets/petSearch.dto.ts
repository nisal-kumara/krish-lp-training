import { IsIn } from "class-validator"
import { PetBreed } from "./pet.model"

export class PetSearchDto {

    //note -> video 03 -> 27:00
    @IsIn(Object.values(PetBreed))
    type: string
    breed: string
}