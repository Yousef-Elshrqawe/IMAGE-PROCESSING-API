import express from 'express';
import images from './api/images';

const routes: express.Router = express.Router();

routes.use('/api/images', images);

routes.get(
  '/',
  (request: express.Request, response: express.Response): void => {
    response.send(
      '' +
        '<h1>Welcome to my first project => Image Processing Api</h1>' +
        '<p>' +
        'API Image <code><a href="/api/images">/api/images</a></code>' +
        '<ul>' +
        '<li><a href="/api/images?filename=wallpape">view photo</a></li>' +
        '<li><a href="/api/images?filename=wallpape&width=200&height=200">Adjust the width and height of the image</a></li>' +
        '</ul>' +
        '</p>'
    );
  }
);

export default routes;


