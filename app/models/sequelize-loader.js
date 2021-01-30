const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/matching-server',
  {
    logging: false,
    operatorsAliases: false 
  });

module.exports = {
  database: sequelize,
  Sequlize: Sequelize
}