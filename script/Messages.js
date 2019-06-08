window.onload = function () {
    getMessages();
};

function getMessages() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://mikey.ovh/restAPI/api/messages",
        "method": "GET",
        "headers": {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    }
    $.ajax(settings).done(function (response) {
        console.log("Wiadomości - " + JSON.stringify(response));
        localStorage.setItem('messages', JSON.stringify(response));
        //localStorage.setItem('users', response);
    });
}