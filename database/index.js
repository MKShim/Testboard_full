// Setting for connecting database

const Sequelize = require('sequelize');

// The database connecting information

const config = {
    host : process.env.TESTBOARD_MYSQL_HOST || '127.0.0.1',
    port : 3306,
    database : 'testboard',
    user : 'testboard_admin',
    password : process.env.TESTBOARD_MYSQL_HOST || '0000',
};

// sequelize instance 
const sequelize = new Sequelize(config.database, config.user, config.password, {
    host : config.host,
    dialect : 'mysql'
});

// Out to use external module

module.exports = {
    sequelize,

    GlobalStat: require('./global-stat.model')(sequelize),

};