import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Actor } from 'src/actor/entities/actor.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  //**must watch-> 54:10
  @OneToMany(() => Actor, actor => actor.movie)
  @Field(()=> [Actor], {nullable: true})
  actors: Actor[]
}
