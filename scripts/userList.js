document.getElementById("btnSearchUsers").addEventListener('click', searchAsset); 

let fieldNames = {
    userID: "UserID",
    username: "User Name",
    accessLevel: "User Job Role"
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
            let userHtml = "<li>";
            for (let field of Object.keys(fieldNames)) {
                userHtml += "<b>" + fieldNames[field] + ":</b> " + user[field] + " | ";
            }
            if (userHtml.toLowerCase().includes(query)) {
                newHtml += userHtml.slice(0, -3) + "</li>";
            }
        }
        if (newHtml == "") {
            newHtml = "<h2>No users found</h2>"
        }
        document.getElementById("userTableInsert").innerHTML = newHtml;
    });
}