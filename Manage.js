
async function getUsers() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://mikey.ovh:8080/restAPI/api/users",
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
        document.getElementById("userList").appendChild(li);
    }


}
