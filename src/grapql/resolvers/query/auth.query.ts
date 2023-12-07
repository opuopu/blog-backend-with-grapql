import { context } from "../../../types"

export const authQuery  = {
    users:async(parent:any,args:any,{prisma}:any)=>{
        console.log("auth hitted")
        const result  =  await prisma.user.findMany({
         include:{
             posts:true,
             profile:true
         }
        })
        return result 
     },
     user:async(parent:any,args:any,{prisma,userId}:context)=>{
 if(!userId){
    return{
        error:"you are not authorized",
        user:null
    }
 }
           const result  = await prisma.user.findFirst({
             where:{
                 id:userId as string
             },
             include:{
                 profile:true
             }
           })
           return {
            error:null,
            user:result
           }
     },
     profile:async(parent:any,args:any,{prisma,userId}:any)=>{
    
         const result  = await prisma.profile.findUnique({
         where:{
             userId:args.userId
         }
         })

         return {
            error:null,
            profile:result
         }
     },
}