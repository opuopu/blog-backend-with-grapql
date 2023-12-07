export const authQuery  = {
    users:async(parent:any,args:any,{prisma}:any)=>{
        const result  =  await prisma.user.findMany({
         include:{
             posts:true,
             profile:true
         }
        })
        return result 
     },
     user:async(parent:any,args:any,{prisma}:any)=>{
           const result  = await prisma.user.findFirst({
             where:{
                 id:args.id
             },
             include:{
                 profile:true
             }
           })
           return result
     },
     profile:async(parent:any,args:any,{prisma}:any)=>{
         const result  = await prisma.profile.findUnique({
         where:{
             id:args?.id
         }
         })
         return result
     },
}