import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Movie } from 'src/movie/entities/movie.entity';
import { ActorService } from './actor.service';
import { ActorCreateDTO } from './dto/actor-create.input';
import { Actor } from './entities/actor.entity';

@Resolver(() => Actor)
export class ActorResolver {

    constructor(private actorService: ActorService){
    }

    //note -> 26:30
    @Query(() => [Actor], {name: "getAllActors"})
    findAll(){
        return this.actorService.findAll();
    }

    @Mutation(() => Actor, {name: "createActor"})
    //**note -> 38:20
    create(@Args('actorInput') actor: ActorCreateDTO){
        return this.actorService.create(actor);
    }

    @Query(() => Actor, {name: "actorById"})
    findOne(@Args("id") id: string) {
        return this.actorService.findOne(id)
    }

    @ResolveField(() => Movie)
    //why Parent Decorater? -> 01:13:00
    movie(@Parent() actor: Actor) {
        return this.actorService.getMovie(actor.movieId)
    }
} 
