import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PetBreed, PetType } from '../pet.enum';

@ObjectType()
@Entity()
export class Pet {
  
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string
  @Field()
  @Column()
  petName: string
  @Field()
  @Column()
  petType: PetType
  @Field()
  @Column()
  breed: PetBreed
}
