export const postQuery = {
    posts:async(parent:any,args:any,{prisma}:any)=>{
        console.log("hitted")
        const result  =  await prisma.post.findMany({})
        return result
    },
    post:async(parent:any,args:any,{prisma}:any)=>{
        const result  =  await prisma.post.findUnique({
            where:{
                id:args?.id
            }
        })
        return result
    },
}