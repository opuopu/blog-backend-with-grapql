export const typeDefs = `#graphql
  type Post {
    id: ID!
    title: String!
    authorId: String!
    content: String!
    createdAt: String!
    published: Boolean!
  }

  type User {
    id: ID!
    email: String!
    name: String!
    createdAt: String!
    profile: Profile
    posts: [Post]
  }

  type Profile {
    id: ID!
    userId: String!
    createdAt: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
    profile(id: ID!): Profile
    posts: [Post]
    post(id: ID!): Post
  }

  type Mutation {
    signUp(name:String, email:String, password:String):signupArgs
    login(email:String password:String):UserArgs
    post( title: String!
      authorId: String!
      content: String!
      published: Boolean!
      ):Post
  }
  type UserArgs {
    token:String
    error:String
  }
  type signupArgs {
    user:User
    error:String
  }


`;
