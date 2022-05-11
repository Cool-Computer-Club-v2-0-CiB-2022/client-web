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
    api.request("POST", "login",
    function (req) {
        if (req.status == 200) {
            let data = JSON.parse(req.responseText);
            document.cookie = "username=" + data.username + ";sameSite=Lax;max-age=31536000";
            document.cookie = "accessLevel=" + data.accessLevel + ";sameSite=Lax;max-age=31536000";
            window.location.replace("index.html");
        }
        else {
            alert("Username or password is invalid");
        }
    }, {username:username, password:password})
}

document.addEventListener("DOMContentLoaded", function () {
    api.request('GET', 'logout');
    document.cookie = "username=null;sameSite=Lax;max-age=31536000";
    document.cookie = "accessLevel=null;sameSite=Lax;max-age=31536000";
});