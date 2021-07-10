import { ObjectType, Field } from "@nestjs/graphql";
import { Movie } from "src/movie/entities/movie.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

  //**must watch-> 54:10
  @ManyToOne(() => Movie, movie => movie.actors)
  @Field(() => Movie)
  movie: Movie

  @Column()
  @Field()
  movieId: string
}

