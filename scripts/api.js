"use strict";

const api = {
    domain: "http://localhost:8080/",
    username: "",
    accessLevel: "",
    request: function (type, endpoint, onFinish, json) {
        let req = new XMLHttpRequest();
        if (onFinish != null) {
            req.onreadystatechange = function () {
                if (req.readyState == 4) {
                    onFinish(req);
                }
            }
        }
        req.open(type, this.domain + endpoint);
        if (type == "POST" || type == "PUT") {
            req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            req.send(JSON.stringify(json));
        }
        else {
            req.send();
        }
    },
    // Returns an object with username and accessLevel
    // both will be "null" if not logged in
    getUser: function () {
        let user = {};
        let cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
            cookie = cookie.split("=");
            if (cookie[0] == "username") {
                user.username = cookie[1];
            }
            if (cookie[0] == "accessLevel") {
                user.accessLevel = cookie[1];
            }
        }
        return user;
    }
};