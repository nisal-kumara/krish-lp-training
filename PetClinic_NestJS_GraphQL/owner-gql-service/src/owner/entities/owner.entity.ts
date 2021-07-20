import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

}
