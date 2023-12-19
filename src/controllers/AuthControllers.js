const loginView = (req, res) => {
  res.render("login", { titulo: "CaC - Login" });
};
const login = (req, res) => {};
const registerView = (req, res) => {
  res.render("register", { titulo: "CaC - Register" });
};

const register = (req, res) => {};
const logout = (req, res) => {};

module.exports = {
  loginView,
  login,
  registerView,
  register,
  logout,
};
