const Express = require('express');
const users = require('./controllers/users');
const app = Express();


app.set('view engine', 'ejs');
app.use(Express.static('./public'));
users(app);
app.listen("5000");

console.log("server listening on port 5000");
