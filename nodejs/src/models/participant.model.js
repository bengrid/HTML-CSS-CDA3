const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('participant',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        /*sexe: {
            type: DataTypes.STRING,
            allowNull: false,
        },*/
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        } ,
        sexe: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        
    })
}