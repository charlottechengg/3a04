const express = require('express');
const bodyParser = require('body-parser');

const utils = require('./utils');

const app = express();

const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Hello');
});

app.post('/api/auth/:gid/:name/:email', (req, res) => {
    console.log("Auth Route");
    const {gid, name, email} = req.params;
    utils.handleLogin(gid, name, email);
    return res
        .status(201)
        .json({
            state: 'success',
            code: 201
        });
});

app.post('/api/traffic/:type', (req, res) => {
    console.log("Traffic Route");
    const url = req.originalUrl;
    const type = req.params.type;
    switch(type) {
        case 'login':
            utils.updateTrafficData(true, url);
            break;
        case 'logout':
            utils.updateTrafficData(false, url);
            break;
        default:
            break;
    }
    return res
        .status(201)
        .json({
            state: 'success',
            code: 201
        });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});