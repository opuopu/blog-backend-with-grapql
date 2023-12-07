// batching and caching 

import { User } from "@prisma/client";
import { prisma } from "./prismaClient";
import DataLoader from "dataloader";

//batching means we load all the data just 1 time and store it in caching system so that we dont need hit every time in database
const batchuser  = async(ids:string[]) =>{
    console.log("Batching for IDs:", ids);
    const users = await prisma.user.findMany({
      where:{
        id:{
        in:ids
        }
      }
    })
// sample input
/*
 const sampleUsers = [
  { id: '1', name: 'User 1' },
  { id: '2', name: 'User 2' },
  { id: '3', name: 'User 3' },
];*/

    const userData:{[key:string]:User} = {}
    users.forEach((user:User)=>{
        userData[user.id] = user
    })
    /* sample output

     {
        "1":{name:"user 1"},
        "2":{name:"user 2"},
         "3":{name:"user 3"},
     }

    */
    return ids.map((id)=>userData[id])
    /*sample output if ids = ["1","2"]
    [
  { id: '1', name: 'User 1' },
  { id: '2', name: 'User 2' },
   ]
   */
}
//@ts-ignore
export const userLoader  =  new DataLoader<number,User>(batchuser)