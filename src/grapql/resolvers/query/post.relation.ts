import { userLoader } from "../../../dataloader";
import { context } from "../../../types";

export const Post ={
    author:async(parent:any,args:any,{prisma,userId}:context)=>{
        const loaderdata = await userLoader.load(parent.authorId)
       return loaderdata
    }
}