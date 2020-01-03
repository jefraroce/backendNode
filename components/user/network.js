const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function (req, res) {
  const filterUsers = req.query.name || null;
  controller.getUsers(filterUsers)
    .then((userList) => {
      response.success(req, res, userList, 200);
    })
    .catch((error) => {
      response.error(req, res, error, 400);
    });
});

router.post('/', function (req, res) {
  const body = req.body;

  console.log('req.body ', req.body);
  controller.addUser(body.name)
    .then((user) => {
      response.success(req, res, user, 201);
    })
    .catch((error) => {
      response.error(req, res, error, 400);
    });
});

// router.patch('/:id', function (req, res) {
//   console.log('req.params.id ', req.params.id);
//   controller.updateUser(req.params.id, req.body.name)
//     .then((updatedUser) => {
//       response.success(req, res, updatedUser, 200);
//     })
//     .catch((error) => {
//       response.error(req, res, 'Error interno', 500, error);
//     });
// });

// router.delete('/:id', function (req, res) {
//   console.log('req.params.id ', req.params.id);
//   controller.deleteUser(req.params.id)
//     .then(() => {
//       response.success(req, res, `Usuario ${req.params.id} elimininado`, 200);
//     })
//     .catch((error) => {
//       response.error(req, res, 'Error interno', 500, error);
//     });
// });

module.exports = router;
