const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Users = require('../models/User')

const connection = new Sequelize(dbConfig)

Users.init(connection)

module.exports = connection
