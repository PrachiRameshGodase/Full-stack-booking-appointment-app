const Sequelize=require('sequelize')


const sequelize=require('../util/database')

const booking=sequelize.define('booking',{
    id:{
        type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
    },
    name:Sequelize.STRING,

    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },

    phonenumber:{
        type:Sequelize.DOUBLE,
        allowNull:false,
        unique:true
    }
})

module.exports=booking;