const express = require('express');
const glob = require('glob');

const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const { helpers } = require('handlebars-helper');

module.exports = (app, config) => {
  const env = process.env.NODE_ENV || 'development';
  app.locals.ENV = env;
  app.locals.ENV_DEVELOPMENT = env == 'development';

  app.engine('handlebars', exphbs({
    layoutsDir: config.root + '/app/views/layouts/',
    defaultLayout: 'main',
    partialsDir: [config.root + '/app/views/partials/'],
    helpers: {
      ifEqual: function (a, b, options) {
        if(a === b) {
          return options.fn(this);
        }

        return options.inverse(this);
      },
      encode: helpers.encode
    }
  }));
  app.set('views', config.root + '/app/views');
  app.set('view engine', 'handlebars');

  // app.use(favicon(config.root + '/public/img/favicon.ico'));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(cookieParser());
  app.use(compress());
  app.use(express.static(config.root + '/public'));
  app.use(methodOverride());

  require('./routes')(app);

  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      err.status = err.status || 500;
      res.status(err.status);

      res.render('error', {
          message: err.message,
          status: err.status,
          stack: err.stack
      });
    });
  } else {
    app.use(function(err, req, res, next) {
      err.status = err.status || 500;
      res.status(err.status);

      res.render('error', {
          message: err.message,
          status: err.status,
          stack: null
      });
    });
  }

  return app;
};
