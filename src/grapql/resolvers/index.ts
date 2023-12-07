
import { prisma } from '../../prismaClient';
import {UserResolverType} from '../../types/index'
import jwt from 'jsonwebtoken'
import { isUserExist } from '../../utiles/checkExistUser';
import { Query } from './query/Query';
import { Mutation } from './mutation/Mutation';
import { Post } from './query/auth.relation';
export const resolvers = {
    Query:Query,
    // relational query
    Post:Post,
 Mutation:Mutation
  };