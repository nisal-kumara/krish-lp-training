import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOwnerInput {
  
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
