import { authQuery } from './auth.query';
import { postQuery } from './post.query';



export const Query ={
 ...authQuery,
 ...postQuery
   
}