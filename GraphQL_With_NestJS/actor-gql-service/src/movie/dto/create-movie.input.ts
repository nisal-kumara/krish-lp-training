import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMovieInput {
 
  @Field()
  title: string
  @Field(() => Int)
  code: number
}
