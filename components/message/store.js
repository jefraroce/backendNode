const Model = require('./model');

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
  console.log('myMessage ', myMessage);
}

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser) {
      filter = { user: filterUser };
    }

    Model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }

        console.log('Populated ', populated);
        resolve(populated);
      });
  });
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id
  });

  foundMessage.message = message;
  const updatedMessage = await foundMessage.save();

  return updatedMessage;
}

async function deleteMessage(id) {
  return Model.deleteOne({
    _id: id
  });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  update: updateText,
  remove: deleteMessage
  // get
  // update
  // delete
}
