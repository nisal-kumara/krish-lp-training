import { IsNotEmpty } from "class-validator"

export class OwnerCreateDto {
    id: string
    //note -> video 03 -> 10:35
    @IsNotEmpty()
    firstName: string
    @IsNotEmpty()
    lastName: string
    email: string
    mobile: number
    refrenceNo: number
}
//note -> video 03 -> 13:20 | reffer to PetModule for pet-breed pipe validation