const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const Category = sequelize.define("category", {
    categoryid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
   } }, {
timestamps : false
    
  
});


async function sync(){
    await Category.sync({ force : true});
    console.log("category tablosu eklendi");
    }
    
    sync();
    


module.exports = Category;
