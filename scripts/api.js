"use strict";

const api = {
    domain: "https://api.cool-computer-club.com/",
    // domain: "http://localhost:8080/",
    httpGet: function (endpoint, onFinish) {
        let req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                onFinish(req);
            }
        }
        req.open("GET", this.domain + endpoint);
        req.send();
    },
    httpPost: function (endpoint, json, onFinish) {
        let req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                onFinish(req);
            }
        }
        req.open("POST", this.domain + endpoint);
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        req.send(JSON.stringify(json));
    }
};