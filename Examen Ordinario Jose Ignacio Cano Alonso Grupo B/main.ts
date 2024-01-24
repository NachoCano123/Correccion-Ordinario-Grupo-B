import mongoose from "mongoose"
import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { typeDefs } from "./typeDefs.ts"
import { Query } from "./resolvers/Query.ts"
import { Mutation } from "./resolvers/Mutation.ts"

try {

  const MONGO_URL = "mongodb+srv://nacho:12345@cluster0.3aayvs9.mongodb.net/Escuela?retryWrites=true&w=majority"
  await mongoose.connect(MONGO_URL)
  console.log("Conectado con exito a la base de datos")

  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: {
      Query,
      Mutation
    }
  })

  const url = await startStandaloneServer(server)

  console.info("La url de tu servidor es " , url)

} catch (e) { 
   console.error(e)
  }