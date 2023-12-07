import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './grapql/schema';
import { resolvers } from './grapql/resolvers';
import { prisma } from './prismaClient';
import { context } from './types';
import { PrismaClient } from '@prisma/client';
import JwtHelper from './jwthelpers/jwthelpers';



  const grapqlServer  =  async()=>{
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
        context:async({req}):Promise<context>=>{
          let jwt;
          if(req.headers.authorization){
           jwt =  new JwtHelper(req.headers.authorization,'secret2023')

          }
    
          const userData  = await jwt?.verifyToken()
  console.log(userData)
          return  {prisma,userId:userData?.userId}
        }
      });
      console.log(`🚀  Server ready at: ${url}`);
  }
  grapqlServer()
