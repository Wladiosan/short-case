const db = require('../../db/db')

class UserController {
    async createUser(req, res) {
        const {email, password} = req.body
        const newPerson = await db.query(`INSERT INTO users (email, password) VALUES ('${email}', '${password}') RETURNING *`)
        res.status(201)
        res.json(newPerson.rows[0])
    }

    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM users')
        res.status(200)
        res.json(users.rows)
    }

    async getUserById(req, res) {
        const id = req.params.id
        const users = await db.query(`SELECT * FROM users WHERE id = ${id}`)
        res.status(200)
        res.json(users.rows[0])
    }

    async updateUser(req, res) {
        const {id, email, password} = req.body
        const user = await db.query(`UPDATE users set email = ${email}, password = ${password} WHERE id = ${id}`)
        res.status(201)
        res.json(user.rows[0])
    }

    async deleteUser(req, res) {
        const id = req.params.id
        await db.query(`DELETE FROM users WHERE id = ${id}`)
        res.status(204)
    }
}

module.exports = new UserController()