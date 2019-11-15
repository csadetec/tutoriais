const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.set('useFindAndModify', false)
//module.exports = mongoose.connect('mongodb://localhost/todo', {useUnifiedTopology:true, useNewUrlParser:true})
module.exports = mongoose.connect('mongodb+srv://mongo:mongo@cluster0-m8pau.mongodb.net/todo?retryWrites=true&w=majority', {useUnifiedTopology:true, useNewUrlParser:true})
