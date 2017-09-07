"use strict";

// installation d'express
const express = require('express');

let app = express();

// on recupere le chemin, url /add
app.get('/add', function(req, res) {
    if (!req.query.a || !req.query.b) {
        res.status(400);
        res.send('missing parameter');
        return;
    }
    let a = parseFloat(req.query.a);
    let b = parseFloat(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        res.status(400);
        res.send('invalid parameter');
        return;
    }
    res.send((a - b).toString());
});

// appeller le serveur web
const port = 8008;
app.listen(port, function(err) {
    if (err) {
        console.error('fail to serveur:', err);
        return;
    }
    // le message s'affiche dans la console
    console.log('listening on port ', port, "...");
});