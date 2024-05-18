import connection from "../../../db/connectionDB.js"


export const addPost = (req, res, next) => {
    const { title, description, price } = req.body
    connection.execute(`insert into posts (title, description, price) 
    values("${title}","${description}","${price}")`, (err, result) => {
        if (err) {
            return res.json({ msg: "query error", err })
        }
        if (!result.affectedRows) {
            return res.json({ msg: "fail to added" })
        }
        return res.json({ msg: "done" })

    })
}
export const updatePost = (req, res, next) => {
    const { title, description, price, id } = req.body
    connection.execute(`update posts set title="${title}", description="${description}",price="${price}"
    where id="${id}"`, (err, result) => {
        if (err) {
            return res.json({ msg: "query error", err })
        }
        if (!result.affectedRows) {
            return res.json({ msg: "fail to updated" })
        }
        return res.json({ msg: "done" })

    })
}
export const deletePost = (req, res, next) => {
    const { id } = req.body
    connection.execute(`delete from posts where id="${id}"`, (err, result) => {
        if (err) {
            return res.json({ msg: "query error", err })
        }
        if (!result.affectedRows) {
            return res.json({ msg: "fail to updated" })
        }
        return res.json({ msg: "done" })

    })
}
export const getPosts = (req, res, next) => {

    connection.execute(`select * from posts`, (err, result) => {
        if (err) {
            return res.json({ msg: "query error", err })
        }
        return res.json({ msg: "done", result })

    })
}