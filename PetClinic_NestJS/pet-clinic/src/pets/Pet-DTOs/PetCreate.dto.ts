import { IsNotEmpty } from "class-validator"
import { Owner } from "src/schemas/Owner.schema"
import { PetBreed, PetType } from "../pet.enum"

export class PetCreateDto {
    id: string
    petName: string
    petType: PetType
    breed: PetBreed
    //note -> video 03 -> 10:35
    @IsNotEmpty()
    ownerId: Owner
}