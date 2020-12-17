// Create express app
var express = require("express")
var app = express()
var db = require("./database.js")


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Server port
var HTTP_PORT = 8000
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

// Root endpoint
app.get("/", (req, res, next) => {
    res.json({ "message": "Ok" })
});


//Listataan kaikki puhelinluettelosta 
// Täydennä tämä api. hakutulos on json tiedosto
app.get("/api/puhelinluettelo", (req, res, next) => {

});

//haetaan nimi puhelinnumerolla
// Täydennä tämä api. hakutulos on json tiedosto

app.get("/api/puhelinnumero", (req, res, next) => {
   //sql malli   var sql = "select * from puhelinluettelo where puhelinnumero = ?"
   
});

//uuden numeron ja nimen lisääminen
// Täydennä tämä api. lisää sopiva http koodi 
app.post("/api/puhelinnumero", (req, res, next) => {
   //sql malli  var sql = 'INSERT INTO puhelinluettelo (etunimi,sukunimi,puhelinnumero) VALUES (?,?,?)'
   
})