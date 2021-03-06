import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { PetService } from './pet.service';
import { Pet } from './entities/pet.entity';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Owner } from './entities/owner.entity';

@Resolver(() => Pet)
export class PetResolver {
  constructor(private readonly petService: PetService) {}

  @Mutation(() => Pet)
  createPet(@Args('createPetInput') createPetInput: CreatePetInput) {
    return this.petService.create(createPetInput);
  }

  @Query(() => [Pet], { name: 'getAllPets' })
  findAll() {
    return this.petService.findAll();
  }

  @Query(() => Pet, { name: 'petById' })
  findOne(@Args('id') id: string) {
    return this.petService.findOne(id);
  }

  @Mutation(() => Pet)
  updatePet(@Args('updatePetInput') updatePetInput: UpdatePetInput) {
    return this.petService.update(updatePetInput.id, updatePetInput);
  }

  @Mutation(() => Pet)
  removePet(@Args('id', { type: () => Int }) id: string) {
    return this.petService.remove(id);
  }

  @ResolveField()
  owner(@Parent() pet: Pet) {
      return {__typename: Owner, id: pet.ownerId}
  }
}
