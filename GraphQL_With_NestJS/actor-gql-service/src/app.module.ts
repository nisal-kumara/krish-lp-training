import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActorModule } from './actor/actor.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [ActorModule, GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
  }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'actor',
    entities: ["dist/**/*.entity{.ts,.js}"], //note -> 20:28 on video
    synchronize: true,
  }),
  MovieModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
