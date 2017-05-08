import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

import techResources from './routes/techresources';
import users from './routes/users';

let app = express();

// @see http://expressjs.com/en/advanced/best-practice-security.html
app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, 'favicon.ico')));

/* ***************************** */
/* Webpack dev & hot middlewares */
/* ***************************** */

// @see https://github.com/glenjamin/webpack-hot-middleware

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(webpackHotMiddleware(compiler));

/* Serve static content from public build directory : */
app.use('/build', express.static(__dirname + '/public/build'));

/* *************************************** */
/* Routes for API (tech resources & users) */
/* *************************************** */

app.use('/api/techresources', techResources);
app.use('/api/users', users);

/* *************************************** */
/* Render index.html (React.js driven SPA) */
/* *************************************** */

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

const port = process.env.NODE_PORT || 3000;
app.listen(port, () => console.log('Running on localhost:' + port));
