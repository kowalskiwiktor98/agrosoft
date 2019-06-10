window.onload = function () {
    filldropdown();
};

function filldropdown() {
    var users = JSON.parse(localStorage.getItem('users'));
    //console.log(users);
    var dropdown = document.getElementById('dropdown');
    for (u of users) {
        var option = document.createElement('option');
        var select = document.createTextNode(u.first_name + ' ' + u.last_name);
        option.setAttribute("value", u.user_id);
        option.appendChild(select);
        dropdown.appendChild(option);
    }
}

function sendMessage() {
    var dropdown = document.getElementById('dropdown');
    var selected = dropdown.options[dropdown.selectedIndex].value;
    var subject = document.getElementById("inputSubject").value;
    var message = document.getElementById("inputBody").value
    console.log(selected);
    console.log(subject);
    console.log(message);
    var body = {
        recipient_id: selected,
        subject: subject,
        body: message
    }
    postMessage(body);
}
function clearForm() {

}

function postMessage(body) {
    $.ajax({
        type: 'POST',
        url: 'https://mikey.ovh/restAPI/api/messages',
        data: JSON.stringify(body),
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: xhr => {
            xhr.setRequestHeader("Authorization", `Bearer ${localStorage.getItem('token')}`);
        },
        error: e => {
            console.error(new Error(e));
        },
        success: response => {
            console.log(response);
        }
    });
}