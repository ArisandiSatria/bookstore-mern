import express from "express";
import {PORT, mongoDBURL} from "./config.js"
import mongoose from 'mongoose'
import booksRoute from "./routes/bookRoute.js"
import cors from "cors"

const app = express()

app.use(express.json())

app.use(cors())
// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ["GET", "POST", "UPDATE", "DELETE"],
//   allowedHeaders: ["Content-Type"]
// }))

app.get('/', (req, res) => {
  return res.status(234).send("Welcome to MERN stack app")
})

app.use('/books', booksRoute)

mongoose.connect(mongoDBURL)
.then(() => {
  console.log('App connected to database');
  app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
  })
  
})
.catch((error) => {console.log(error);})