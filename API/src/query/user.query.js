import { query } from "express"

const QUERY = {
    SELECT_USERS : 'SELECT * FROM users ORDER BY created_at DESC LIMIT 100',
    SELECT_USER : 'SELECT * FROM users WHERE id = ?',
    CREATE_USER : 'INSERT INTO users (firstname, lastname, username, password, imagen) VALUES (?,?,?,?,?)',
    UPDATE_USER : 'UPDATE users SET firstname = ?, lastname = ?, username = ?, password = ?, imagen = ? WHRER id = ?',
    DELETE_USER : 'DELETE FROM users WHERE id = ?',
}

export default query;