const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('formation',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type:DataTypes.DATE,
            allowNull: false,
        },
        formateur: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        icon: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        duree: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        version: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        langages: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    })
}