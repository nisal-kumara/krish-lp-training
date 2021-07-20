import { CreateOwnerInput } from './create-owner.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOwnerInput extends PartialType(CreateOwnerInput) {
  
  @Field()
  id: string;
  @Field({nullable: false})
  firstName: string
  @Field()
  lastName: string
  @Field({nullable: false})
  email: string
  @Field()
  mobile: number
  @Field()
  refrenceNo: number
}
