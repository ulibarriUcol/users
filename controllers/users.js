const fetch = require('node-fetch');
const { getUsers } = require('../models/users');
module.exports = (app) => {

    app.get("/", (req, res) => {
        res.render('index');
    });

    app.get("/users", async (req, res) => {
        const users = await getUsers();
        res.json(users);
    });





}