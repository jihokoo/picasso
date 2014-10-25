var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connection;

var env = process.env.NODE_ENV || 'dev';

if('dev' == env || 'test' == env){
  mongoose.connect(process.env.mongoURL);
} else if('production' == env){
  mongoose.connect(process.env.mongoURL);
}

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("mongoose connection is open")
});

var artSchema = new Schema({

});

var Art = mongoose.model('Art', artSchema);

exports.Art = Art;
