import { DataTypes } from "sequelize";
import sequelize from "../Config/db.js";

export const Productos = sequelize.define(
    'Productos',
    {
        id:{
            type:DataTypes.UUID,
            primaryKey:true
        },
        nombre:{
            type:DataTypes.STRING
        },
        stock:{
            type:DataTypes.INTEGER
        }
    },
    {
        freezeTableName:true
    }
)

Productos.sync({force:true})