import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './grapql/schema';
import { resolvers } from './grapql/resolvers';
import { prisma } from './prismaClient';
import { context } from './types';
import { PrismaClient } from '@prisma/client';



  const grapqlServer  =  async()=>{
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
        context:async():Promise<context>=>{
          return  {prisma}
        }
      });
      console.log(`🚀  Server ready at: ${url}`);
  }
  grapqlServer()
