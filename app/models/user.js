'use strict'
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const User = loader.database.define('users',{
  userId: {
    type: Sequelize.INTERER,
    primaryKey: true,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,

  },
  introduction: {
    type: Sequelize.STRING,
    allowNull: true
  },
  likeband: {
    type: Sequelize.STRING,
    allowNull: true
  }
},{
  freezeTableNAme: true,
  timestamps: false
})

module.exports = Post;
