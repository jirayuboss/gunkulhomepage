var express = require("express");
var request = require('request');
var mysql = require('mysql');
var app = express();
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/products", async (req, res, next) => {
    let url = 'https://fakestoreapi.com/products'
    request(url, { json: true }, (err, body) => {
        if (err) { return console.log(err); }
        res.json(body.body);
    });
});

app.get("/products/:productId", async (req, res) => {
    const url = 'https://fakestoreapi.com/products/' + req.params.productId
    request(url, { json: true }, (err, body) => {
        if (err) { return console.log(err); }
        res.json(body.body);
    });
});

app.post("/products", async (req, res, next) => {
    console.log(req.body)
});