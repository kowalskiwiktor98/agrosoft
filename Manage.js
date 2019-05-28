
/* async function getUsers() {

    console.log("getUsers");
    try {
        const response = await axios({
            url: 'http://mikey.ovh:8080/restAPI/api/users',
            method: 'get'
        })
        console.log(response);
    }
    catch (e) {
        console.error(e);
    }

} */
async function getUsers() {
    console.log("getUsers");
    console.log(localStorage.getItem('token'));
    var config = {
        headers: { 'Authorization': "bearer " + localStorage.getItem('token') }
    };

    var bodyParameters = {
        key: "value"
    }

    axios.post(
        'http://mikey.ovh:8080/restAPI/api/users',
        bodyParameters,
        config
    ).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    });
}