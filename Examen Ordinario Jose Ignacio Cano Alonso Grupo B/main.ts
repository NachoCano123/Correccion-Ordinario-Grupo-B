import mongoose from "mongoose"
import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { typeDefs } from "./typeDefs.ts"
import { Query } from "./resolvers/Query.ts"
import { Mutation } from "./resolvers/Mutation.ts"
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";

try {

  const env= await load()

  const MONGO_URL = Deno.env.get("MONGO_URL") || env.MONGO_URL || "mongodb+srv://nacho:12345@cluster0.3aayvs9.mongodb.net/Modogql?retryWrites=true&w=majority"
  if(!MONGO_URL)
  {
    //MONGO_URL: "mongodb+srv://nacho:12345@cluster0.3aayvs9.mongodb.net/Modogql?retryWrites=true&w=majority"
    console.log("no se puede conectar")
    //Deno.exit(1)
  }

  await mongoose.connect(MONGO_URL)
  

  /*const MONGO_URL = "mongodb+srv://nacho:12345@cluster0.3aayvs9.mongodb.net/Escuela?retryWrites=true&w=majority"
  await mongoose.connect(MONGO_URL)
  console.log("Conectado con exito a la base de datos")*/

  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: {
      Query,
      Mutation
    }
  })

  const url = await startStandaloneServer(server, { //Declaramos el puerto por el que escucha el servidor
    listen: {
      port: 3000,
    },
  })

  console.info("La url de tu servidor es " , url)

} catch (e) { 
   console.error(e)
  }