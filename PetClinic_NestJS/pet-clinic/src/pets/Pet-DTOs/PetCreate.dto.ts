import { IsNotEmpty } from "class-validator"
import { PetBreed, PetType } from "../pet.enum"

export class PetCreateDto {
    id: string
    petName: string
    petType: PetType
    breed: PetBreed
    //note -> video 03 -> 10:35
    @IsNotEmpty()
    refrenceNo: number
}