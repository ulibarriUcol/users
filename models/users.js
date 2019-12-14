fetch = require('node-fetch');

const getUsers = async () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    return await users.json();  //la respuesta viene en una promesa, por eso hay que resolverla

}

module.exports = {
    getUsers
}