const { Op } = require('sequelize')
const User = require('../models/User')

module.exports = {
	async show(req, res) {

		const users = await User.findAll({
			attributes:['name', 'email'],
			where: {
				email: {
					[Op.like]: '%@freicarlosvicuna.com.br'
				}
			},
			/*
			include:[
				{ association: 'address', where}
			]
			/***/
		})
		return res.json(users)
	}
}