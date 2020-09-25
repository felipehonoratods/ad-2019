const { Router } = require('express');
const FriendController = require('./controllers/FriendController');
const EmailController = require('./controllers/EmailController');
const routes = Router();

routes.get('/friends', FriendController.index);
routes.get('/friends/:id', FriendController.show);
routes.post('/friends', FriendController.store);
routes.put('/friends/:id', FriendController.update);
routes.delete('/friends/:id', FriendController.destroy);
routes.post('friends/mails', send_mail);

function send_mail(request, response, next) {
  EmailController.send_mail(request.body)
    .then((result) => response.status(201).json(result))
    .catch(err => next(err))
}

module.exports = routes;