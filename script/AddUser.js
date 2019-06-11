$(document).ready(function () {
    document.getElementById('submit').onclick = submit;
});


function submit() {
    let body = {
        first_name: document.getElementById('firstname').value,
        last_name: document.getElementById('lastname').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    }
    let settings = {
        url: "https://mikey.ovh/restAPI/api/auth/signup",
        method: "POST",
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