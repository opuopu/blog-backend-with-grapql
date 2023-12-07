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
     profile:async(parent:any,args:any,{prisma,userId}:any)=>{
        console.log(userId)
        if(!userId){
            return{
                error:"userId Not Found",
                profile:null
            }
        }
         const result  = await prisma.profile.findUnique({
         where:{
             userId:userId
         }
         })

         return {
            error:null,
            profile:result
         }
     },
}