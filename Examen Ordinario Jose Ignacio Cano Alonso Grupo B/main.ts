import express from "npm:express@4.18.2"
import mongoose from "npm:mongoose@7.6.3"

try {
  let MONGO_URL= Deno.env.get("MONGO_URL")

  if (!MONGO_URL) {
    console.log("No url valida de mongo")
    MONGO_URL="mongodb+srv://nacho:12345@cluster0.3aayvs9.mongodb.net/Escuela?retryWrites=true&w=majority"
    //Deno.exit(1)
  }

  mongoose.connect(MONGO_URL)
  console.log("Conectado con exito a la base de datos")

  const app=express()
  app.use(express.json())

  //Hacer los endpoints
  app.get("/nose/:id", )

  app.listen(3000, ()=> {
    console.info("Escuchando por el puerto 3000")
  })

} catch (e) {  console.error(e)}