import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Pet } from 'src/pet/entities/pet.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Owner {
  
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Field({nullable: false})
    @Column()
    firstName: string
    @Column()
    @Field({nullable: false})
    lastName: string
    @Column()
    @Field()
    email: string
    @Column()
    @Field()
    mobile: number
    @Column()
    @Field()
    refrenceNo: number

    //implementing one-to-many relationship
    @OneToMany(() => Pet, pet => pet.owner)
    @Field(()=> [Pet], {nullable: true})
    pets: Pet[]

}
