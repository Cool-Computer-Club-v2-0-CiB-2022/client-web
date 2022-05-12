document.addEventListener('DOMContentLoaded', populateUser);

function populateUser(){
    //Get Attributes
    const assetAtribute = String(window.location).split("=")[1];
    console.log(assetAtribute)
    api.request("GET", 'users', function(resp){
        let user = JSON.parse(resp.responseText)[assetAtribute]
        console.log(user);

        document.getElementById('h3UserID').innerText = ("UserID: " + user.userID);
        console.log(user.userID);
        document.getElementById('h3UserName').innerText = ("User Name: " + user.username);
        console.log(user.username);
        document.getElementById('jobrole').value = (user.accessLevel);
        console.log(user.accessLevel);
    })
}