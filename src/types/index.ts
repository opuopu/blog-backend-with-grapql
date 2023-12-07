import { Prisma, PrismaClient } from "@prisma/client"
import { DefaultArgs } from "@prisma/client/runtime/library"

export type  UserResolverType ={
content:{
    name:string
    email:string
    password:string
    bio?:string
}
}

export interface context {
    prisma:PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
    userId?:String
}