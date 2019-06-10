document.getElementById("loginbtn").onclick = zaloguj;

function zaloguj() {
    const username = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    $.ajax({
        type: 'POST',
        url: 'https://mikey.ovh/restAPI/api/auth/signin',
        data: JSON.stringify({
            username,
            password,
        }),
        dataType: 'json',
        contentType: 'application/json',
        error: e => {
            console.error(new Error(e));
        },
        success: response => {
            localStorage.setItem('token', response.accessToken);
            localStorage.setItem('tokenType', response.tokenType);
            console.log(response.accessToken);
            window.location.href = 'main.html';
        }
    });
}