var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);

var passport = require('passport');
var authenticate = require('./authenticate');
var config = require('./config');

const mongoose = require('mongoose');
const User = require('./models/user');
const Creatives = require('./models/creatives');
const Ideas = require('./models/ideas');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var creativesRouter = require('./routes/creativesRouter');
var ideasRouter = require('./routes/ideasRouter');

const url = config.mongoUrl;
const connect = mongoose.connect(process.env.MONGODB_URI || url, {
	 useNewUrlParser: true, 
	 useUnifiedTopology: true });

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use('/creatives', creativesRouter);
app.use('/ideas', ideasRouter);

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

app.use(cors);


if(process.env.NODE_ENV === 'production'){
	app.use(express.static('../lemontreeFrontend/build'));
}

module.exports = app;
