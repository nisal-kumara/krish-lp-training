import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OwnersModule } from './owners/owners.module';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [OwnersModule, PetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
