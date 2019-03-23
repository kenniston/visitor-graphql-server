import { GraphQLServer } from 'graphql-yoga'
import { Query } from './resolvers/Query'
import { Guest } from './resolvers/Guest'
import { Invite } from './resolvers/Invite'
import { Location } from './resolvers/Location'

const resolvers = {
  Query,
  Guest,
  Invite,
  Location
}

const options = {
  port: process.env.GRAPHQL_SERVER_PORT || 3000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
}

const server = new GraphQLServer({ 
  typeDefs: './src/schema.graphql', 
  resolvers 
})  
server.start(options, ({ port }) => 
  console.log(`GraphQL Server is running on localhost:${port}`)
)                               