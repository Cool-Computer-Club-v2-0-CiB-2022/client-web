let fieldNames = {
    userID: "UserID",
    username: "User Name",
    accessLevel: "User Job Role"
};

document.addEventListener("DOMContentLoaded", function () {
    api.request('GET', 'users',
        function (resp) {
            let users = JSON.parse(resp.responseText);
            let newHtml = "";
            for (let user of Object.values(users)) {
                let userHtml = "<li>";
                for (let field of Object.keys(fieldNames)) {
                    userHtml += "<b>" + fieldNames[field] + ":</b> " + user[field] + " | ";
                }
                newHtml += userHtml.slice(0, -3) + "</li>";
            }
            document.getElementById("userTableInsert").innerHTML = newHtml;
        });
});