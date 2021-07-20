import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Directive('@key(fields: "id")')
@Entity()
export class Owner {
  
    @Field((type)=>ID)
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

}
