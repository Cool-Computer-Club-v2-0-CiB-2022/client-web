document.getElementById("btnSearchUsers").addEventListener('click', searchAsset); 

let accessLevel = {
    manager: "Manager",
    technician: "Technician",
    general: "General",
    serviceDesk: "Service Desk",
};


document.addEventListener("DOMContentLoaded", getList);

function searchAsset() {
    query = document.getElementsByClassName("searchBox")[0].value;
    getList(query);
}

function getList(query) {
    api.request('GET', 'users',
    function (resp) {
        let users = JSON.parse(resp.responseText);
        let newHtml = "";
        if (!(typeof query === "string" || query instanceof String)) {
            query = "";
        }
        for (let user of Object.values(users)) {
            let userHtml = "<a href='selectedUser.html?id=" + user["userID"] + "'><li>";
            userHtml += "<b>UserID:</b> #" + ("00000" + user.userID).slice(-6) + " | ";
            userHtml += "<b>User Name:</b> " + user.username + " | ";
            userHtml += "<b>User Job Role:</b> " + accessLevel[user.accessLevel];
            if (userHtml.toLowerCase().includes(query)) {
                newHtml += userHtml + "</li></a>";
            }
        }
        if (newHtml == "") {
            newHtml = "<h2>No users found</h2>"
        }
        document.getElementById("userTableInsert").innerHTML = newHtml;
    });
}