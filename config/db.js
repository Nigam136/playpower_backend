const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("playpower", "postgres", "nigam123", {
  dialect: "postgres",
});

module.exports = sequelize;
