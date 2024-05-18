import express from 'express'
import postRouter from "./src/modules/posts/post.routes.js"
import connection from './db/connectionDB.js'
import cors from "cors"
const app = express()
const port = process.env.port || 3000



app.use(express.json())
app.use(cors())

connection
app.get("/", (req, res) => {
    return res.json({ msg: "Hello on my project!" })
})
app.use("/posts", postRouter)
app.use("*", (req, res) => {
    return res.json({ msg: "404 not found" })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))