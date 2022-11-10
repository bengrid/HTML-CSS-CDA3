const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            unique : {
                msg : 'Utilisateur deja existant'
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}