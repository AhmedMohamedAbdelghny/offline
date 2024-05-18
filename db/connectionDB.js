import mysql from "mysql2"

const connection = mysql.createConnection("mysql://uqq1a0hcoipu7fca:W6KXCGgwDwq762PXt2TM@bmsr8vqn5hm8zsoziea1-mysql.services.clever-cloud.com:3306/bmsr8vqn5hm8zsoziea1")


connection.connect((err) => {
    if (err) {
        return res.json({ msg: "Error connecting to db", err })
    }
    console.log("Connected to db")
})

export default connection;