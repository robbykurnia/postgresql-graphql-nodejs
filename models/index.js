import Sequelize from "sequelize";

const sequelize = new Sequelize("graphql_db", "postgres", "postgres", {
  dialect: "postgres"
});

// Table
const db = {
  User: sequelize.import("./user"),
  Post: sequelize.import("./post"),
  Comment: sequelize.import("./comment")
};

Object.keys(db).forEach(models => {
  if ("associate" in db[models]) db[models].associate(db);
});

db.sequelize = sequelize;

export default db;
