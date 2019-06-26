var express = require('express');
var mongoose = require('mongoose');
var db = mongoose.connection;
var router = express.Router();
mongoose.connect('mongodb://localhost/bossDatabase');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('test11111');
});
router.get('/aa', function(req, res, next) {
  res.send('aaa');
});





//测试
//创建结构
// var kittySchema = mongoose.Schema({
//   name:String
// })
// //创建模型
// var Kitten = mongoose.model("Kitten",kittySchema);
// //创建实例
// var felyne = new Kitten({name:"Felyne"});

// felyne.save( function(err){
//   if(err) console.log("保存出错")
// } );





db.on('error', console.error.bind(console, '数据库连接发生错误'));
db.once('open', function() {
  // we're connected!
  console.log( "数据库成功打开" )
});

module.exports = router;
