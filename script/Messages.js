var messages;

$(document).ready(function () {
    getMessages();
    messages = JSON.parse(localStorage.getItem('messages'));
    messages.reverse();
    displayinboxchat();
    prepareButtons();
});

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
        //console.log("Wiadomości - " + JSON.stringify(response));
        localStorage.setItem('messages', JSON.stringify(response));
        //localStorage.setItem('users', response);
    });
}
function displayinboxchat() {
    console.log(messages);
    document.getElementById("mailbox").innerHTML = '';
    for (child of document.getElementById("mailbox").children) {
        child.value = '';
    }
    for (m of messages) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        var sender = document.createElement("span");
        var subject = document.createElement("span");
        var text = document.createElement("span");
        sender.appendChild(document.createTextNode("Nadawca: " + m.message.creator.first_name + ' ' + m.message.creator.last_name))
        subject.appendChild(document.createTextNode("Temat: " + m.message.subject));
        text.appendChild(document.createTextNode("Treść: " + m.message.body));
        a.appendChild(sender);
        a.appendChild(subject);
        a.appendChild(text);
        li.appendChild(a);
        document.getElementById("mailbox").appendChild(li);
    }
}

function prepareButtons() {
    document.getElementById("sendMessages").onclick = function () { sendMessages() };
    document.getElementById("deleteMessages").onclick = function () { deleteMessages() };

}

function sendMessages() {
    console.log("send messages");
    window.location.href = './Form/SendMessage.html';
}
function deleteMessages() {
    console.log("delete messages");
    window.location.href = './Form/DeleteMessage.html';
}

function filterMessages() {
    messages = JSON.parse(localStorage.getItem('messages'));
    console.log(document.getElementById('mailsearch').value);
    messages = messages.filter(messages => messages.message.body.includes(document.getElementById('mailsearch').value))
    displayinboxchat();
}