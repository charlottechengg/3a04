// utils.js
// ========

const fs = require('fs'),
    path = require('path'),    
    authPath = path.join(__dirname, '../db/auth.csv'),
    trafficPath = path.join(__dirname, '../db/traffic.csv');


function writeToTrafficFile(delta, data, route) {
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();
    const oldCount = Number.parseInt(data.split(",")[3]);
    const newCount = oldCount + delta;
    const newRow = `${date},${time},${route},${newCount}\n`
    fs.appendFileSync(trafficPath, newRow);
}

module.exports = {
    updateTrafficData: function (increment, route) {
        const delta = increment ? +1 : -1;
        fs.readFile(trafficPath, 'utf8', function(err, data) {
            const rawData = data.split(/\r?\n/);
            let last = rawData.pop();
            if (!last) {
                last = rawData.pop();
            }
            writeToTrafficFile(delta, last, route);
        });
    },
    handleLogin: function(gid, name, email) {
        const newRow = `${gid},${name},${email}\n`;
        fs.appendFileSync(authPath, newRow);
    }
}