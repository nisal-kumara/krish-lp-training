import { InputType, Int, Field } from '@nestjs/graphql';
import { Owner } from 'src/owner/entities/owner.entity';
import { PetBreed, PetType } from '../pet.enum';

@InputType()
export class CreatePetInput {
 
  @Field()
  petName: string
  @Field()
  petType: PetType
  @Field()
  breed: PetBreed
  
  @Field({nullable: false})
  ownerId: string
}
