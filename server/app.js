var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require("cors")
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter  = require('./routes/home');

var app = express();

// CORS
app.use((req, res, next) => {
  if(req.path !== '/' && !req.path.includes('.')){
      res.header({
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin': req.headers.origin || '*',
          'Access-Control-Allow-Headers': 'Origin,x-requested-with,content-type,Accept',
          'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
          'Content-Type': 'application/json; charset=utf-8'
      })
  }
  next()
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// parse application/json
app.use(bodyParser.json())
//跨域白名单
// app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use('/home',homeRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
