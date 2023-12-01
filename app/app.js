"use strict";

// 모듈
const express = require("express");
const bodyparser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: true }));
// 정적 경로 추가

app.use("/", home);
// use => 미들웨어 등록 메서드

module.exports = app;
