import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PetBreed, PetType } from '../pet.enum';
import { Owner } from './owner.entity';

@ObjectType()
@Directive('@key(fields: "id")')
@Entity()
export class Pet {
  
  @Field((type)=>ID)
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

   //implementng Many-to-one relationship
   //@ManyToOne(() => Owner, owner => owner.pets)
   @Field(() => Owner)
   owner: Owner

   @Field()
   @Column()
   ownerId: string
 
}
