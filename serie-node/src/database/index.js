const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mongo:mongo@cluster0-m8pau.mongodb.net/noderest?retryWrites=true&w=majority', { useNewUrlParser: true,  useUnifiedTopology: true  })
mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true);

module.exports = mongoose