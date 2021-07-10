import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
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
} 
