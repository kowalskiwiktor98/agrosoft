$(document).ready(function () {
    document.getElementById('submit').onclick = submit;
    filldropdown();
});

function filldropdown() {
    let users = JSON.parse(localStorage.getItem('users'));
    console.log('filldropdown');
    let dropdown = document.getElementById('dropdown');
    for (u of users) {
        if (u.user_id == 3) continue;//nie pozwala na skasowanie januszka
        let option = document.createElement('option');
        let select = document.createTextNode(u.first_name + ' ' + u.last_name);
        option.setAttribute("value", u.user_id);
        option.appendChild(select);
        dropdown.appendChild(option);
    }
}


function submit() {
    let dropdown = document.getElementById('dropdown');
    let selected = dropdown.options[dropdown.selectedIndex].value;
    console.log("delete user of id: " + selected);
    let settings = {
        url: "https://mikey.ovh/restAPI/api/users/" + selected,
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    }
    $.ajax(settings).done(function (response) {
        console.log(response);
        console.log('redirect');
        window.location.href = '../Manage.html'
    });
}