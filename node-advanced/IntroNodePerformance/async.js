const https = require("https");

const start = Date.now();

const doRequest = () => {
    https.request("https://www.google.com", res => {
        // res is at a lower-level than other reqest libraries
        res.on("data", () => {});
        res.on("end", () => {
            console.log(Date.now() - start);
        });
    }).end();
}

const doRequests = (n) => {
    [...Array(n)].forEach(() => doRequest())
}

doRequests(50);