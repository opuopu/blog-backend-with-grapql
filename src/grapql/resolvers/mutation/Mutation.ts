import { postMutation } from './post.mutation';
import { authMutation } from './auth.mutation';
export const Mutation ={...authMutation,...postMutation}