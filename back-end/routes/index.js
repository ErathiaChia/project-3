const express = require("express");
const app = express();
const auth = require("./auth");

app.use(express.json());

const board = require("./board.route");
const login = require("./login.route");
const register = require("./register.route");

app.use("/board", auth, board);
app.use("/login", login);
app.use("/register", register);

module.exports = app;
