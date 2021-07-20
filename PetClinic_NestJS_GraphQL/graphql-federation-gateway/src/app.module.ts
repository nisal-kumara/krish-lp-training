import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module({
  imports: [GraphQLGatewayModule.forRoot({
    server: {
      cors: true
    },
    gateway: {
      serviceList: [
        {name: "owners", url: "http://localhost:3002/graphql"},
        {name: "pets", url: "http://localhost:3003/graphql"},
      ]
    }
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
