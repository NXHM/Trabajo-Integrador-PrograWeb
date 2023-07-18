import {Sequelize} from "sequelize";

// Sequelize(db name, username, password)
export const sequelize = new Sequelize("db-proyecto", "postgres", "admin", {
    host: "localhost", 
    dialect: "postgres"
})