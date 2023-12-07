import { context } from "../../../types";

export const Post ={
    author:async(parent:any,args:any,{prisma,userId}:context)=>{
        console.log(parent)
       const authorId  =  parent?.authorId
       const result  = await prisma.user.findUnique({
        where:{
            id:authorId
        }
       })
       console.log(result)
       return result
    }
}