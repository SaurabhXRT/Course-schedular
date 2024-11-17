const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    "postgres",
    "postgres.eoboyeyjferyxftkelaw",
    "Iop890@iop#$",
    {
        host: "aws-0-ap-southeast-1.pooler.supabase.com",
        port: process.env.DB_PORT,
        dialect: 'postgres',
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
