const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function (req, res) {
  const filterMessages = req.query.user || null;
  controller.getMessages(filterMessages)
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

router.patch('/:id', function (req, res) {
  console.log('req.params.id ', req.params.id);
  controller.updateMessage(req.params.id, req.body.text)
    .then((updatedMessage) => {
      response.success(req, res, updatedMessage, 200);
    })
    .catch((error) => {
      response.error(req, res, 'Error interno', 500, error);
    });
});

router.delete('/:id', function (req, res) {
  console.log('req.params.id ', req.params.id);
  controller.deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Mensaje ${req.params.id} elimininado`, 200);
    })
    .catch((error) => {
      response.error(req, res, 'Error interno', 500, error);
    });
});

module.exports = router;
