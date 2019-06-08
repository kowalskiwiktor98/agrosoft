
async function getUsers() {
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
    //console.log(JSON.stringify(array));
    for (user of array) {
        console.log(user);
        var li = document.createElement("li");
        var t = document.createTextNode(user.first_name + ' ' + user.last_name);
        li.appendChild(t);
        // //#region button edit
        // var btn = document.createElement("BUTTON");
        // btn.innerHTML = "Edytuj";
        // btn.setAttribute("id", user.user_id)
        // btn.onclick = function () {
        //     console.log("Edit user " + this.id);
        //     editUser(this.id)
        // }
        // li.appendChild(btn);
        // //#endregion
        // //#region button delete
        // var btn = document.createElement("BUTTON");
        // btn.innerHTML = "Usuń";
        // btn.setAttribute("id", user.user_id)
        // btn.onclick = function () {
        //     console.log("Delete user " + this.id);
        //     deleteUser(this.id)
        // }
        // li.appendChild(btn);
        // //#endregion
        document.getElementById("userList").appendChild(li);

    }

    function editUser(id) {
        console.log("Edit user " + id);
    }
    function deleteUser(id) {
        console.log("Delete user " + id);
    }
    function addUser() {
        console.log("Add user");
    }
}

document.getElementById("addUser").onclick = function () { addUser() };

function addUser() {
    console.log("addUser");
}