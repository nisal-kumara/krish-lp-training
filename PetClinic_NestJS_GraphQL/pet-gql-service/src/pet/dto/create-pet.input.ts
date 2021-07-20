import { InputType, Int, Field } from '@nestjs/graphql';
import { PetBreed, PetType } from '../pet.enum';

@InputType()
export class CreatePetInput {
 
  @Field()
  petName: string
  @Field()
  petType: PetType
  @Field()
  breed: PetBreed
}
