document.addEventListener("DOMContentLoaded", function () {
    // get user object
    user = api.getUser();
    // if not logged in, go to log in page
    if (user.username == "null") {
        window.location.replace("login.html");
    }
    // add message
    document.getElementById("welcomeMessage").innerHTML = "Welcome " + user.username + " [" + user.accessLevel + "]";
});