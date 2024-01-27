import montoose from "mongoose";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./typeDefs.ts"
import { Query } from "./resolvers/Query.ts"
import { Mutation } from "./resolvers/Mutation.ts"

  const MONGO_URL = Deno.env.get("MONGO_URL");
  if (!MONGO_URL) {
    throw new Error("Please provide a MongoDB connection string");
  }

  // Connect to MongoDB
await montoose.connect(MONGO_URL);
  

  /*const MONGO_URL = "mongodb+srv://nacho:12345@cluster0.3aayvs9.mongodb.net/Escuela?retryWrites=true&w=majority"
  await mongoose.connect(MONGO_URL)
  console.log("Conectado con exito a la base de datos")*/

  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Mutation
    }
  })

  const { url } = await startStandaloneServer(server, { listen: 8000 })  //Declaramos el puerto por el que escucha el servidor
    
  console.info(`Server ready at ${url}`);
