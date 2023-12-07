
import { prisma } from '../../prismaClient';
import {UserResolverType} from '../../types/index'
import jwt from 'jsonwebtoken'
import { isUserExist } from '../../utiles/checkExistUser';
import { Query } from './query/Query';
import { Mutation } from './mutation/Mutation';
export const resolvers = {
    Query:Query,
 Mutation:Mutation
  };