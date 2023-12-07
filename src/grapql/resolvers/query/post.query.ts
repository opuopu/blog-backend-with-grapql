export const postQuery = {
    posts:async(parent:any,args:any,{prisma}:any)=>{
        const result  =  await prisma.post.findMany({})
        return result
    }
}