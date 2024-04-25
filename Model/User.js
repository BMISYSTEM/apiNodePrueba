import { DataTypes } from "sequelize";
import sequelize from "../Config/db.js";

export const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
  },
  {
    // forza a que la tabla se llame igual que el modelo
    freezeTableName: true,
  }
);
User.sync({force:true})