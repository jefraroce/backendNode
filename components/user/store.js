const Model = require('./model');

function addUser(user) {
  const myUser = new Model(user);
  return myUser.save();
}

async function getUsers(filterUsers) {
  let filter = {};
  if (filterUsers) {
    filter = { name: filterUsers };
  }

  return Model.find(filter);
}

module.exports = {
  add: addUser,
  list: getUsers
};
