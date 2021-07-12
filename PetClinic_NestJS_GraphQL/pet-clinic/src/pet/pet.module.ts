import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetResolver } from './pet.resolver';
import { OwnerModule } from 'src/owner/owner.module';
import { Pet } from './entities/pet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Pet]), OwnerModule],
  providers: [PetResolver, PetService]
})
export class PetModule {}
