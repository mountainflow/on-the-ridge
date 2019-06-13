// require("dotenv").config();
var express = require("express");
var app = express();
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;

// var db = require("./models");

// Middleware
app.use(express.urlencoded({
    extended: true
})
);
app.use(express.json());
app.use(express.static("public"));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// Handlebars
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");


// Routes
// require("./routes/api-User-Routes")(app);

// Starting the server ------------------------------------/
app.listen(PORT, function () {
    console.log("App running on ", PORT);
})

module.exports = app;
