import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

import TechResourcesRepository from './model/TechResourcesRepository';

const techResourcesRepository = new TechResourcesRepository();

let app = express();

app.use(bodyParser.json());

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(webpackHotMiddleware(compiler));

/* Serve static content from public build directory : */
app.use('/build', express.static(__dirname + '/public/build'));

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
