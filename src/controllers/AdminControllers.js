const adminView = (req, res) => {
  res.render("listProds", { titulo: "ADMIN" });
};

// ---CREATE---
const createItem = async (req, res) => {
  // TODO: Hacer condición para saber si el objeto ya existe
  const payload = req.body; // Son los datos que obtengo del form
  await Producto.create(payload);
};
const createView = (req, res) => {
  res.render("create", { titulo: "ADMIN - CREATE" });
};

// ---EDIT---
const updateItem = async (req, res) => {
  // const id = req.params.id;
  // const item = await Item.findAll({ where: { id: id } }); // Es el método de sequelize
  // // Tambien puede hacerse con un filter de JS
  // // const items = await Item.findAll().filter(item => item.id === id)
};

const editView = (req, res) => {
  res.render("edit", { titulo: "ADMIN - EDIT" });
};

// ---DELETE---
const deleteItem = (req, res) => {};

module.exports = {
  adminView,
  createView,
  createItem,
  editView,
  updateItem,
  deleteItem,
};
