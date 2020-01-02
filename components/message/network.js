const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function (req, res) {
  controller.getMessages()
    .then((messageList) => {
      response.success(req, res, messageList, 201);
    })
    .catch((error) => {
      response.error(req, res, error, 400);
    });
});

router.post('/', function (req, res) {
  const body = req.body;

  console.log('req.body ', req.body);
  controller.addMessage(body.user, body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((error) => {
      response.error(req, res, error, 400);
    });
});

module.exports = router;
