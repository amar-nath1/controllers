const Sequelize=require('sequelize')

const sequelize=new Sequelize('nodecomplete','root','Admin@123',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize