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

    app.get("/users/:user", async (req, res) => {
        const { user } = req.params;
        // res.json(users);
        // console.log(user);
        const users = await getUsers();
        // console.log(users);
        const matches = users.filter((match) => {
            const regExp = new RegExp(user, 'gi')
            return regExp.test(match.name)
        })
        // console.log(matches);
        res.json(matches);

    });



}


// filterFunction = (userInput) =>{
//     var filteredNames = names.filter((x)=>{ 
//         return x.includes(userInput)
//     }
//     return filteredNames
//  }