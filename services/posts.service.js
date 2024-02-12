const db = require('../db.js')

module.exports.getAllPosts = async ()=>{
    // this.sortTable()
    const [rows] = await db.query("SELECT * FROM posts")
    return rows
}

module.exports.getPostById = async (id)=>{
    // this.sortTable()
    const [rows] = await db.query("SELECT * FROM posts where id = ?", [id])
    return rows
}

module.exports.deletePost = async (id)=>{
    // this.sortTable()
    const [rows] = await db.query("DELETE FROM posts where id = ?", [id])
    return rows
}

module.exports.addPost = async function(text,id) {
    console.log(text,id)
    // this.sortTable();
    const [rows] = await db.query('INSERT INTO posts (id, title) values (?, ?)', [id, text]);
    return rows;
}

module.exports.sortTable = async ()=>{
    const [rows] = await db.query("SELECT * FROM posts ORDER BY id")
}


