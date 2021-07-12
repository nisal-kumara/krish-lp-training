import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Owner } from 'src/owner/entities/owner.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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
  

  //implementng Many-to-one relationship
  @ManyToOne(() => Owner, owner => owner.pets)
  @Field(() => Owner)
  owner: Owner

  @Field({nullable: false})
  @Column({nullable: false})
  ownerId: string
}
