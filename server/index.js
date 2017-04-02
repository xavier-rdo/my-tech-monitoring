import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

import TechResourcesRepository from './model/TechResourcesRepository';

const techResourcesRepository = new TechResourcesRepository();

let app = express();

app.disable('x-powered-by'); // cf. http://expressjs.com/en/advanced/best-practice-security.html
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, 'favicon.ico')));

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(webpackHotMiddleware(compiler));

/* Serve static content from public build directory : */
app.use('/build', express.static(__dirname + '/public/build'));

// @todo: move this in a dedicated module cf. http://expressjs.com/en/guide/routing.html#express-router */
app.get('/api/techresources', (req, res) => {
    techResourcesRepository.getAllResources()
        .then(function(data) {
            res.status(200)
               .json({
                    status: 'success',
                    data: data,
                    message: 'Found'
                });
        })
        .catch(function (err) {
            res.status(500)
               .json({
                    status: 'failure',
                    message: 'Database request has failed'
                });
        });
    ;
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('Running on localhost:3000'));
