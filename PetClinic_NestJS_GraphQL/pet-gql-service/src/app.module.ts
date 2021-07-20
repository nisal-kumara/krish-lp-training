import { Module } from '@nestjs/common';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetModule } from './pet/pet.module';
import { OwnerResolver } from './pet/owner.resolver';
import { Owner } from './pet/entities/owner.entity';

@Module({
  imports: [PetModule, GraphQLFederationModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    buildSchemaOptions: {
      orphanedTypes: [Owner]
    }
  }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'pet-gql',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
