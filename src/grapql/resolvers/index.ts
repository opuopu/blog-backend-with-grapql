
import { prisma } from '../../prismaClient';
import {UserResolverType} from '../../types/index'
import jwt from 'jsonwebtoken'
export const resolvers = {
    Query: {
        users:async(parent:any,args:any,context:any)=>{
           const result  =  await prisma.user.findMany({
            include:{
                posts:true,
                profile:true
            }
           })
           return result 
        }
    },
    Mutation:{
        signUp: async(parent:any,args:UserResolverType,context:any)=>{
            const isExistUser  = await prisma.user.findFirst({where:{
                email:args?.email
            }})
            if(isExistUser){
throw new Error("user already exist with this email ")
            }
           const result  =  await prisma.user.create({
            data:args
           })
           return result
        },
        login:async(parent:any,args:{email:string,password:string},context:any)=>{
            const findUser  =  await prisma.user.findFirst({
                where:{
                    email:args.email,
                    password:args.password
                }
            })
            if(!findUser){
                throw new Error('user not found')
            }
            const token = jwt.sign({ userId: findUser.id, email: findUser?.email }, 'secret2023', { expiresIn: '1d' });
            console.log(token)
               return {token}

        }
    }
  };