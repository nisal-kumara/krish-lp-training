import { ObjectType, Field } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//note -> 15:00
@ObjectType()
@Entity()
export class Actor {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Field()
  @Column()
  firstName: string
  @Field({nullable: true})
  @Column({nullable: true})
  lastName: string
  @Field()
  @Column()
  country: string
  @Field()
  @Column()
  favMovie: string
}
