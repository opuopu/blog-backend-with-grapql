import { prisma } from "../prismaClient"

export const isUserExist  =  async(email:string)=>{
    const isExist =  await prisma.user.findFirst({
        where:{
            email:email
        }
    })
    return isExist
}