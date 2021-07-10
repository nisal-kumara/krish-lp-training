import { Field, InputType } from "@nestjs/graphql";

//note -> 30:40
@InputType()
export class ActorCreateDTO{

    @Field()
    firstName: string
    @Field({nullable: true})
    lastName: string
    @Field()
    country: string
    @Field()
    favMovie: string
}