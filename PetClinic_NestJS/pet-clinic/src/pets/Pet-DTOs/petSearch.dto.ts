import { IsIn } from "class-validator"
import { PetBreed, PetType } from "../pet.enum"

export class PetSearchDto {

    //note -> video 03 -> 27:00
    // @IsIn(Object.values(PetType))
    type: PetType
    // @IsIn(Object.values(PetBreed))
    breed: PetBreed
}