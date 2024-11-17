const { Sequelize } = require('sequelize');
const pg = require("pg");
const sequelize = new Sequelize(
    "postgres",
    "postgres.eoboyeyjferyxftkelaw",
    "Iop890@iop#$",
    {
        host: "aws-0-ap-southeast-1.pooler.supabase.com",
        port: 6543,
        dialect: 'postgres',
        dialectModule: pg,
        logging: false,
    }
);
sequelize.sync();
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error.message);
    });

module.exports = sequelize;
