require('rootpath')();
let dotenv = require('dotenv').config(); // Load environment variables
let bodyParser = require('body-parser'),
  cors = require('cors'),
  compression = require('compression'),
  config = require('config.json'),
  errorHandler = require('backend/_helpers/error-handler'),
  db = require('backend/_helpers/db'),
  files = require('backend/files/files.service.js'),
  express = require('express'),
  app = express(),
  fs = require('fs'),
  path = require('path'),
  http = require('http'),
  httpApp = express(),
  https = require('https'),
  helmet = require('helmet'),
  methodOverride = require('method-override'),
  api = require('backend/api.js'),
  oneDay = 86400000,
  server = require('http').Server(app),
  emailer = require('backend/_helpers/email'),
  logger = require('backend/_helpers/logger.js');

// Process exceptions
process.on('uncaughtException', function (err) {
  logger.crit(
    ' [Critical error] Stopping application...' +
      ' Error info: ' +
      err +
      ' Stack: ' +
      err.stack
  );
  process.exit(1);
});

// Start up email environment and folders
// emailer.initEnvironment();
// Setup folder structure
// files.initFolders();

// Redirect all http petitions on port 8080 -> https port 443 in PRODUCTION
if (process.env.NODE_ENV === 'production') {
  http.createServer(httpApp).listen(8080, function () {
    logger.info(
      '[Server - Redirect] Redirecting all http petitions from port 8080 to 443.'
    );
    httpApp.all('*', function (req, res, next) {
      res.redirect('https://' + req.headers.host + req.url);
    });
  });
}

// Start mongo connection and finish Express server set-up
db.startConnectionDB().then(() => {
  logger.info('[DB] Successfully connected to the database!!');
  logger.info('[Server] Setting up Express server in port 3000...');
  const serverPort = config.serverPort;
  if (process.env.NODE_ENV === 'production') {
    // Override server configuration for using certificates
    const options = {
      ca: fs.readFileSync(
        '/etc/letsencrypt/live/galcovid.gal/chain.pem',
        'utf-8'
      ),
      key: fs.readFileSync(
        '/etc/letsencrypt/live/galcovid.gal/privkey.pem',
        'utf-8'
      ),
      cert: fs.readFileSync(
        '/etc/letsencrypt/live/galcovid.gal/cert.pem',
        'utf-8'
      ),
    };
    server = https.createServer(options, app);
  }
  server.listen(serverPort, function () {
    logger.info(
      '[Server] Express server running on port ' + config.serverPort + ' ...'
    );
  });
});

// All header, connection and security configurations
app.use(helmet()); // Protect express against multipe attacks
app.use(
  helmet.hsts({
    // Force the use of https on top of production redirect
    maxAge: 15552000, // 180 days in seconds - modified value. Helmet
  })
);
app.use(helmet.xssFilter()); // Protect agains xss attacks
app.use(
  cors({
    origin: '*',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'X-Requested-With,content-type, Authorization',
  })
);
app.use(bodyParser.urlencoded({ extended: false })); // Way of parsing json objetc, look through the docs for more info
app.use(bodyParser.json()); // Allows json body request objects.
app.use(compression()); //Habilito compresión
app.use(logger.httpInfo);
app.use(logger.httpError);
app.use(api); // Load api routes
app.use(
  express.static(__dirname + '/dist/covidtool', {
    dotfiles: 'allow',
    maxAge: oneDay,
  })
); // Serve dist files as static route
app.use('*', express.static(__dirname + '/dist/covidtool')); // Serve index.html (aka Angular App) for any not-known route.
app.use(methodOverride());
app.use(errorHandler.serverErrorHandler);
