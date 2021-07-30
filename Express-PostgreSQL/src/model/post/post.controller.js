const db = require('../../db/db')

class PostController {
    async createPost(req, res) {
        const {title, content, userId} = req.body
        const newPost = await db.query(`INSERT INTO posts (title, content, user_id) VALUES ('${title}', '${content}', ${userId}) RETURNING *`)
        res.status(201)
        res.json(newPost.rows[0])
    }

    async getPostByUser(req, res) {
        const {userId} = req.query
        const post = await db.query(`SELECT * FROM posts WHERE user_id = ${userId}`)
        res.status(200)
        res.json(post.rows[0])
    }

    async deletePost(req, res) {
        const {id} = req.params
        await db.query(`DELETE FROM posts WHERE id = ${id}`)
        res.status(204)
    }
}

module.exports = new PostController()