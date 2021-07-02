import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { PetRepository } from './Pet.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Pet, PetSchema } from 'src/schemas/Pet.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema }])],
  providers: [PetsService, PetRepository],
  controllers: [PetsController]
})
export class PetsModule { }
