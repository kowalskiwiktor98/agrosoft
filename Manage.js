
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
        localStorage.setItem('users', response);
        //localStorage.setItem('users', response);
    });

}
