function addUser () {
    let password = String(Math.random());
    let role = document.getElementById("addUser-JobRole").value;
    if (role == "") {
        return alert("Job Role not selected");
    }
    let username = document.getElementById("usernameInput").value;
    if (username == "") {
        return alert("Username not input");
    }

    
    api.request("POST", "register",
    function (req) {
        if (req.status == 200) {
            alert("New user succesfully added.");
            window.location.replace("userHome.html");
        }
        else {
            alert("Could not create new user, they may already exist");
        }
    }, { username: username, password: password, accessLevel: role })
}