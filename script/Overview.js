$(document).ready(function () {
    getOverview();
});

function getOverview() {
    getSilos();
    getFields();
    getMachines();
    displayAll();
    //prepareButtons();
}

function getSilos() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://mikey.ovh/restAPI/api/silos",
        "method": "GET",
        "headers": {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    }
    $.ajax(settings).done(function (response) {
        console.log(response);
        localStorage.setItem('silos', JSON.stringify(response));
        //localStorage.setItem('users', response);
    });

}
function getFields() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://mikey.ovh/restAPI/api/fields",
        "method": "GET",
        "headers": {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    }
    $.ajax(settings).done(function (response) {
        console.log(response);
        localStorage.setItem('fields', JSON.stringify(response));
        //localStorage.setItem('users', response);
    });

}
function getMachines() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://mikey.ovh/restAPI/api/machines",
        "method": "GET",
        "headers": {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    }
    $.ajax(settings).done(function (response) {
        console.log(response);
        localStorage.setItem('machines', JSON.stringify(response));
        //localStorage.setItem('users', response);
    });

}
function displayAll() {
    var silos = JSON.parse(localStorage.getItem('silos'));
    var fields = JSON.parse(localStorage.getItem('fields'));
    var machines = JSON.parse(localStorage.getItem('machines'));
    for (s of silos) {
        var silosList = document.createElement("li");
        var t = document.createTextNode("Zawartość: " + s.content +
            ", Pojemność: " + s.capacity +
            ", Zapełnienie: " + s.fill_level);
        silosList.append(t);
        silosList.classList.add('list-group-item');
        document.getElementById("silos").appendChild(silosList);
    }
    for (f of fields) {
        var fieldsList = document.createElement("li");
        var t = document.createTextNode("Powierzchnia: " + f.area +
            ", Zawartość: " + f.crop +
            ", Status: " + f.status);
        fieldsList.append(t);
        fieldsList.classList.add('list-group-item');
        document.getElementById("fields").appendChild(fieldsList);
    }
    for (m of machines) {
        var machinesList = document.createElement("li");
        var t = document.createTextNode("Marka: " + m.brand +
            ", Model: " + m.model +
            ", Miesięczna rata: " + m.monthly_instalment);
        machinesList.append(t);
        machinesList.classList.add('list-group-item');
        document.getElementById("machines").appendChild(machinesList);
    }
}
function prepareButtons() {
    document.getElementById("addSilo").onclick = function () { addSilo() };
    document.getElementById("editSilo").onclick = function () { editSilo() };
    document.getElementById("deleteSilo").onclick = function () { deleteSilo() };

    document.getElementById("addField").onclick = function () { addField() };
    document.getElementById("editField").onclick = function () { editField() };
    document.getElementById("deleteField").onclick = function () { deleteField() };

    document.getElementById("addMachine").onclick = function () { addMachine() };
    document.getElementById("editMachine").onclick = function () { editMachine() };
    document.getElementById("deleteMachine").onclick = function () { deleteMachine() };
}
function addSilo() { }
function editSilo() { }
function deleteSilo() { }
function addField() { }
function editField() { }
function deleteField() { }
function addMachine() { }
function editMachine() { }
function deleteMachine() { }