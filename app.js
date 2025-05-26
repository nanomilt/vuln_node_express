const path = require('path');

const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const robots = require('express-robots-txt');

const indexRouter = require('./routes/index');
const searchRouter = require('./routes/search');
const apiRouter = require('./routes/api');


const app = express();

app.use(robots({
  UserAgent: '*',
  Disallow: [ '/', '/search' ],
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/search', searchRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use((_, __, next) => {
  next(createError(404));
});

// error handler
app.use((err, _, __) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;