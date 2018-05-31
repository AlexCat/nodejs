const express = require("express");
const hbs = require('hbs');
const fs = require('fs');

let app = express();

// регистриуем директорию паршалов
hbs.registerPartials(__dirname + "/views/partials");

// устанавливаем движок для рендеринга темплейтов
app.set("view engine", "hbs");

// включаем отдачу статического контента
app.use(express.static(__dirname + "/public"));

app.use((request, response, next) => {
    var now = new Date().toString();

    let log = `${now}: ${request.method} ${request.url}`;
    fs.appendFile("server.log", log + "\n", (err) => {
        if (!err) return;
        console.log(`Unable to append to server.log ${err}`)
    })
    next();
});

// app.use((request, response, next) => {
//     response.render("maintenance.hbs");
//     next();
// });

// регистрируем хелперы
hbs.registerHelper("getCurrentYear", () => new Date().getFullYear());
hbs.registerHelper("screamIt", (text) => text.toUpperCase());

app.get('/', (request, response) => {
    //response.send('<h2>Hello from Express!</h2>');
    // response.send({
    //     name: "Alex",
    //     likes: [
    //         "Biking",
    //         "Cities"
    //     ]
    // })
    response.render("home.hbs", {
        welcomeMessage: "You are welcome!"
    });
});

app.get('/about', (request, response) => {
    response.render("about.hbs", {
        pageTitle: "About Page"
    });
})

app.get('/bad', (request, response) => {
    response.send({
        error: "Unable to handle request"
    });
})

app.listen(3001, () => {
    console.log("Server is up on port 3001");
});