$(document).ready(function () {
    document.getElementById("addUser").onclick = function () { addUser() };
    document.getElementById("editUser").onclick = function () { editUser() };
    document.getElementById("deleteUser").onclick = function () { deleteUser() };
    getUsers();
});

function getUsers() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://mikey.ovh/restAPI/api/users",
        "method": "GET",
        "headers": {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        localStorage.setItem('users', JSON.stringify(response));
        //localStorage.setItem('users', response);
        displayUsers();
    });

}

function displayUsers() {
    var array = JSON.parse(localStorage.getItem('users'));
    console.log(array);
    for (user of array) {
        console.log(user);
        var li = document.createElement("li");
        var t = document.createTextNode(user.first_name + ' ' + user.last_name);
        li.classList.add("list-group-item")
        li.appendChild(t);
        document.getElementById("userList").appendChild(li);

    }
}

function addUser() {
    console.log("addUser");
}
function editUser() {
    console.log("editUser");
}
function deleteUser() {
    console.log("deleteUser");
}