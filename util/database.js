const Sequelize=require('sequelize')

const sequelize=new Sequelize('booking-appoinment','root','Prachi@123',{
    dialect:'mysql',
    host:'localhost',
    

},)
module.exports=sequelize