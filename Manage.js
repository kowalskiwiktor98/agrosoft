
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
    var config = {
        headers: { 'Authorization': "bearer " + getToken() }
    };

    axios.post(
        'http://mikey.ovh:8080/restAPI/api/users',
        null,
        config
    ).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    });
}