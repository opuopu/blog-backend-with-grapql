import  jwt  from 'jsonwebtoken';
import { UserResolverType } from "../../../types"
import { isUserExist } from "../../../utiles/checkExistUser"

export const authMutation  = {
    signUp: async(parent:any,args:UserResolverType,{prisma}:any)=>{
        const isExistUser  = await isUserExist(args?.email)
        if(isExistUser){
        return {
            error:"user already exist with this email!",
            user:null
       
        }
        }
       const result  =  await prisma.user.create({
        data:args
       })
       if(!result){
    return{
        user:null,
        error:"user not created!"
    }
       }


    //    create profile
      await prisma.profile.create({
        data:{
            userId:result.id,
        }
       })
       return {
        user:result,
        error:null
       }
    },
    login:async(parent:any,args:{email:string,password:string},{prisma}:any)=>{
        const findUser  =  await   isUserExist(args?.email)
        if(!findUser){
          return{
            token:null,
            error:"user not exist with this email!",
          }
        }
        const token = jwt.sign({ userId: findUser.id, email: findUser?.email }, 'secret2023', { expiresIn: '1d' });
        console.log(token)
           return {
            token:token,
        error:null
        }

    },

}