
document.getElementById("loginbtn").onclick = zaloguj;

var accessToken;
var tokenType;

async function zaloguj() {
    const username = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    try {
        console.log(username);
        console.log(password);
        const response = await axios.post('http://mikey.ovh:8080/restAPI/api/auth/signin', {
            username,
            password
        });
        //console.log(response);
        accessToken = response.data.accessToken;
        tokenType = response.data.tokenType;
        console.log(accessToken);
        console.log(tokenType);

        localStorage.setItem('token', accessToken);
        localStorage.setItem('tokenType', tokenType);
        window.location.pathname = 'main.html';

    } catch (e) {
        console.error(e);
    }



}