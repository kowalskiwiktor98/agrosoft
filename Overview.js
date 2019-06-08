async function getOverview() {
    getSilos();
    getFields();
    getMachines();
    displayAll();
}

async function getSilos() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://mikey.ovh:8080/restAPI/api/silos",
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
async function getFields() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://mikey.ovh:8080/restAPI/api/fields",
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
async function getMachines() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://mikey.ovh:8080/restAPI/api/machines",
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
        var silosList = document.createElement("silos");
        var t = document.createTextNode("Zawartość: " + s.content +
            ", Pojemność: " + s.capacity +
            ", Zapełnienie: " + s.fill_level);
        silosList.append(t);
        document.getElementById("silos").appendChild(silosList);
    }

    for (f of fields) {
        var fieldsList = document.createElement("fields");
        var t = document.createTextNode("Powierzchnia: " + f.area +
            ", Zawartość: " + f.crop +
            ", Status: " + f.status);
        silosList.appendChild(t);
    }
    for (m of machines) {
        var machinesList = document.createElement("machines");
        var t = document.createTextNode("Marka: " + m.brand +
            ", Model: " + m.model +
            ", Miesięczna rata: " + m.monthly_instalment);
        silosList.appendChild(t);
    }
}