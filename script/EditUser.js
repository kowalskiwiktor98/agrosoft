$(document).ready(function () {
    document.getElementById('submit').onclick = submit;
    filldropdown();
    document.getElementById('dropdown').onchange = update;
});


function filldropdown() {
    let users = JSON.parse(localStorage.getItem('users'));
    console.log('filldropdown');
    let dropdown = document.getElementById('dropdown');
    for (u of users) {
        let option = document.createElement('option');
        let select = document.createTextNode(u.first_name + ' ' + u.last_name);
        option.setAttribute("value", u.user_id);
        option.appendChild(select);
        dropdown.appendChild(option);
    }
}

function update() {
    //console.log('lul');
    let dropdown = document.getElementById('dropdown');
    let selected = dropdown.options[dropdown.selectedIndex].value;
    console.log(selected);
    let users = JSON.parse(localStorage.getItem('users'));
    console.log(users);
    let user = users.find(user => user.user_id == selected);
    console.log('Wybrany użytkownik: ' + user);
    document.getElementById('firstname').value = user.first_name;
    document.getElementById('lastname').value = user.last_name;
    document.getElementById('username').value = user.username;
}

function submit() {
    console.log('submit');
    let dropdown = document.getElementById('dropdown');
    let selected = dropdown.options[dropdown.selectedIndex].value;
    //console.log(selected);
    let users = JSON.parse(localStorage.getItem('users'));
    //console.log(users);
    let user = users.find(user => user.user_id == selected);
    //console.log('Wybrany użytkownik: ' + user);
    let body = {
        first_name: document.getElementById('firstname').value,
        last_name: document.getElementById('lastname').value,
        username: document.getElementById('username').value
    }
    let settings = {
        url: "https://mikey.ovh/restAPI/api/users/" + selected,
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token')
        },
        data: JSON.stringify(body)
    }
    console.log(settings.data)
    $.ajax(settings).done(function (response) {
        console.log(response);
        console.log('redirect');
        window.location.href = '../Manage.html'
    });
}

