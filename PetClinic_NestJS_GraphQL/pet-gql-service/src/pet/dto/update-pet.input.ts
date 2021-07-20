import { CreatePetInput } from './create-pet.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { PetBreed, PetType } from '../pet.enum';

@InputType()
export class UpdatePetInput extends PartialType(CreatePetInput) {
  
  @Field()
    id: string
    @Field()
    petName: string
    @Field()
    petType: PetType
    @Field()
    breed: PetBreed
}
