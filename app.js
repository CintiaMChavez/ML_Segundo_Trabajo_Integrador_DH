const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// llamando_servidor
app.listen(8080, () => {
        console.log("Servidor corriendo!!!💻");
    })
    // Rutas
app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "./views/home.html"));
    })
    //Register
app.get("/register", (req, res) => {
        res.sendFile(path.join(__dirname, "./views/register.html"));
    })
    //Login
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"));
})