"use strict";

const home = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};

const register = (req, res) => {
  res.render("home/register");
};

module.exports = {
  home,
  login,
  register,
}; // hello : hello
