import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Owner } from './entities/owner.entity';
import { Pet } from './entities/pet.entity';
import { PetService } from './pet.service';

@Resolver((of)=> Owner)
export class OwnerResolver {

    constructor(private readonly petService: PetService){}

    @ResolveField((of) => [Pet] )
    pets(@Parent() owner:Owner): Promise<Pet[]>{
        console.log("***check resolving*** " + owner.id)
        return this.petService.forOwner(owner.id)
    }
}
