import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Movie {
 
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string
  @Field()
  @Column()
  title: string
  @Field(() => Int) //note -> 46:05
  @Column()
  code: number
}
