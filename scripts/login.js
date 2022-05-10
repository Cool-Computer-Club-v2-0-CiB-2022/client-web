"use strict";

const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginSubmit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    login(username, password);
});

function login (username, password) {
    api.httpPost("login",
    {username:username, password:password},
    function (req) {
        if (req.status == 200) {
            window.location.replace("index.html");
        }
        else {
            alert("Username or password is invalid");
        }
    })
}