const store = require('./store');

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[messageController] No hay usuario o mensaje');
      reject('Los datos son incorrectos');
      return false;
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date()
    };

    store.add(fullMessage);

    resolve(fullMessage);
  });
}

function getMessages(filterMessages) {
  return new Promise((resolve, reject) => {
    try {
      const messages = store.list(filterMessages);
      resolve(messages);
    } catch (error) {
      console.error('[messageController] ', messages);
      reject('Ha ocurrido un error al consultar los mensajes.');
    }
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      console.error('[messageController] No hay usuario o mensaje');
      reject('Los datos son incorrectos');
      return false;
    }

    const result = await store.update(id, message);

    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      console.error('[messageController] No hay usuario o mensaje');
      reject('Los datos son incorrectos');
      return false;
    }

    store.remove(id)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        console.error('Error ', error);
        reject('Ha ocurrido un error al eliminar el mensaje.');
      });
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
};
