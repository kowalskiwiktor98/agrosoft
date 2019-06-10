window.onload = function () {
    document.getElementById('submit').onclick = function () { submit() }
    filldropdown();
}


function filldropdown() {
    var users = JSON.parse(localStorage.getItem('users'));
    console.log('filldropdown');
    var dropdown = document.getElementById('dropdown');
    for (u of users) {
        var option = document.createElement('option');
        var select = document.createTextNode(u.first_name + ' ' + u.last_name);
        option.setAttribute("value", u.user_id);
        option.appendChild(select);
        dropdown.appendChild(option);
    }
}

document.getElementById('dropdown').onchange = function () { update() }

function update() {
    //console.log('lul');
    var dropdown = document.getElementById('dropdown');
    var selected = dropdown.options[dropdown.selectedIndex].value;
    console.log(selected);
    var users = JSON.parse(localStorage.getItem('users'));
    console.log(users);
    var user = users.find(user => user.user_id == selected);
    console.log('Wybrany użytkownik: ' + user);
    document.getElementById('firstname').value = user.first_name;
    document.getElementById('lastname').value = user.last_name;
    document.getElementById('username').value = user.username;
}

function submit() {
    console.log('submit');
    var dropdown = document.getElementById('dropdown');
    var selected = dropdown.options[dropdown.selectedIndex].value;
    //console.log(selected);
    var users = JSON.parse(localStorage.getItem('users'));
    //console.log(users);
    var user = users.find(user => user.user_id == selected);
    //console.log('Wybrany użytkownik: ' + user);
    var body = {
        "first_name": document.getElementById('firstname').value,
        "last_name": document.getElementById('lastname').value,
        "username": document.getElementById('username').value
    }
    var settings = {
        "url": "https://mikey.ovh/restAPI/api/users/" + selected,
        "method": "PATCH",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token')
        },
        "data": JSON.stringify(body)
    }
    console.log(JSON.parse(settings));
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    console.log('redirect');
    window.location.href = '/Manage.html'
}

