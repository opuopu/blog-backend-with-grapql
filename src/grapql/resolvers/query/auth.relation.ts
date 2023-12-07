import { context } from "../../../types";

export const User ={
    posts:async(parent:any,args:any,{prisma,userId}:context)=>{
       return await prisma.post.findMany({
        where:{
            authorId:args?.id
        }
       })
    }
} 
export const Profile ={
    user:async(parent:any,args:any,{prisma,userId}:context)=>{
        return await prisma.user.findUnique({
            where:{
             id:parent.userId as string
            }
        })
    }
}