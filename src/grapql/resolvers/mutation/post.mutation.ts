
export const postMutation  = {
        // post part
        post:async(parent:any,args:any,{prisma,userId}:any)=>{
            console.log(userId)
            const copyArgs = {...args,authorId:userId}
               const result  = await prisma.post.create({
                data:copyArgs
               })
               return result
        }
}