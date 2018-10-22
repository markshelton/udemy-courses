const doRequest = () => {
    const https = require("https");
    https.request("https://www.google.com", res => {
        // res is at a lower-level than other reqest libraries
        res.on("data", () => {});
        res.on("end", () => {
            console.log("HTTPS:", Date.now() - start);
        });
    }).end();
}

const doHash = () => {
    const crypto = require("crypto");
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
        console.log("Hash:", Date.now() - start);
    });    
}

const doRead = () => {
    const fs = require("fs");
    fs.readFile("multitask.js", "utf8", () => {
        console.log("FS:", Date.now() - start)
    })
}

const doMultiple = fn => n => {
    [...Array(n)].forEach(() => fn())
}

const doRequests = doMultiple(doRequest)
const doHashes = doMultiple(doHash)
const doReads = doMultiple(doRead)

const start = Date.now();

doRequests(3);
doReads(1);
doHashes(5);

// HTTPS does not involve threadpool - bypasses straight to OS
// FS module call starts but suspends to wait for HDD 