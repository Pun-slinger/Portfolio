const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const routes = require("./controller/routes");

//tell server how to handle html files using handlebars
app.engine('.handlebars', exphbs.engine({ defaultLayout: 'main',extname: '.handlebars' }));
app.set('view engine', '.handlebars');

var hbs = exphbs.create({});
// register new function
hbs.handlebars.registerHelper('json', function(obj) {
    return JSON.stringify(obj);
})

app.use(express.static("static"));

app.use("/", routes);

app.use(/*missing route*/(req, res) => {    //use as a catch all routes
    res.status(404).send("<h3 style='color:red'>Page Not Found</h3>");
});

//this function is called after server start listening for request
const HTTP_PORT = process.env.PORT || 8080  ;
function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);