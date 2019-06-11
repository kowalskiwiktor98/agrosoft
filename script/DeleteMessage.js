$(document).ready(function () {
    displayinboxchat();
});

function displayinboxchat() {
    var messages = JSON.parse(localStorage.getItem('messages'));
    console.log(messages);
    messages.reverse();
    for (m of messages) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        var sender = document.createElement("span");
        var subject = document.createElement("span");
        var text = document.createElement("span");
        sender.appendChild(document.createTextNode(m.message.creator.first_name + ' ' + m.message.creator.last_name));
        subject.appendChild(document.createTextNode(m.message.subject));
        text.appendChild(document.createTextNode(m.message.body));
        a.appendChild(sender);
        a.appendChild(subject);
        a.appendChild(text);
        li.appendChild(a);
        document.getElementById("mailbox").appendChild(li);
    }
}