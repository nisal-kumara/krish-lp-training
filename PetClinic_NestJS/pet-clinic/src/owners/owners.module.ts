import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersController } from './owners.controller';
import { OwnerRepository } from './Owner.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Owner, OwnerSchema } from 'src/schemas/Owner.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Owner.name, schema: OwnerSchema }])],
  providers: [OwnersService, OwnerRepository],
  controllers: [OwnersController]
})
export class OwnersModule { }
