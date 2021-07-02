import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { PetBreed, PetType } from "src/pets/pet.enum";

//plane mongodb -> video 04 -> 09:00
// export const PetSchema = ({
//     id: String,
//     petName: String,
//     petType: PetType,
//     breed: PetBreed,
//     refrenceNo: Number
// })

export type PetDocument = Pet & Document;

@Schema()
export class Pet {

    @Prop()
    id: string
    @Prop()
    petName: string
    @Prop()
    petType: PetType
    @Prop()
    breed: PetBreed
    @Prop()
    refrenceNo: number
}

export const PetSchema = SchemaFactory.createForClass(Pet);