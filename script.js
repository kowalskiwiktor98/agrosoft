async function zaloguj() {
    const username = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axios.post('http://mikey.ovh:8080/restAPI/api/auth/signin', {
            username,
            password
        });
        console.log(response);
    } catch (e) {
        console.error(e);
    }

}

