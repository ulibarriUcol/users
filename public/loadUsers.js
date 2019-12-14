const getUsers = () => {
    $.ajax({
        url: 'http://localhost:5000/users',
        success: (data) => {
            // console.log(data);
            // const namesList = data.map((user) => {
            //     const { name = 'Defualt name' } = user
            //     return `<li> ${user.name} </li>`
            // })
            // document.getElementById("my-first-ul").innerHTML = namesList.join('');
            pintaLista("my-first-ul", data);

        }
    })
}

const filterUsers = (filter) => {
    $.ajax({
        url: `http://localhost:5000/users/${filter}`,
        success: (data) => { //aqui data me regresa el subconjunto de nombres que coinciden con el criterio
            // console.log(data); 
            // const namesList = data.map((user) => {
            //     const { name = 'Defualt name' } = user
            //     return `<li> ${user.name} </li>`
            // })
            // document.getElementById("my-second-ul").innerHTML = namesList.join('');
            pintaLista("my-second-ul", data);
        }
    })
}

function pintaLista(nombre, data) {
    const namesList = data.map((user) => {
        const { name = 'Defualt name' } = user
        return `<li> ${user.name} </li>`
    })
    document.getElementById(nombre).innerHTML = namesList.join('');
}

window.onload = () => {
    getUsers();
    document.getElementById('my-input')
        .addEventListener('keyup', () => {
            const myFilter = document.getElementById('my-input').value;
            filterUsers(myFilter);
        })
}





