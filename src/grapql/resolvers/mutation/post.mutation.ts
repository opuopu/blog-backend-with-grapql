import { context } from "../../../types"

export const postMutation  = {
        // post part
        post:async(parent:any,args:any,{prisma,userId}:any)=>{
            console.log(userId)
            const copyArgs = {...args.content,authorId:userId}
               const result  = await prisma.post.create({
                data:copyArgs
               })
               return {
                error:null,
                post:result
               }
        },
        updatePost:async(parent:any,args:any,{prisma,userId}:context)=>{
        
            if(!userId){
                return{
                    error:"user not found",
                    post:null
                }
            }
            const findpost  = await prisma.post.findFirst({
                where:{
                    id:args?.id
                }
            })
            if(!findpost){
                return{
                    error:"post not found with this id",
                    post:null
                }
            }
            if(findpost?.authorId !== userId){
                return{
                    error:"you are not authorized to edit this post",
                    post:null
                }
            }
            const result  =  await prisma.post.update({
                where:{
                    id:args.id
                },
                data:args.content
            })
            return {
                error:null,
                post:result
            }
        },
        deletePost:async(parent:any,args:any,{prisma,userId}:context)=>{
            if(!userId){
                return{
                    error:"user not found",
                    post:null
                }
            }
            const findpost  = await prisma.post.findFirst({
                where:{
                    id:args?.id
                }
            })
            if(!findpost){
                return{
                    error:"post not found with this id",
                    post:null
                }
            }
            if(findpost?.authorId !== userId){
                return{
                    error:"you are not authorized to delete this post",
                    post:null
                }
            }

            const result   = await prisma.post.delete({
                where:{
                    id:args.id
                }
            })
            return {
                error:null,
                post:result
            }
        }
}