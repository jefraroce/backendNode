const db = require('mongoose');

db.Promise = global.Promise;

// mongodb+srv://DB_USER:DB_PASSWORD@DB_HOST:DB_PORT/DB_NAME
// 'mongodb://telegrom_admin:123456@127.0.0.1:27017/telegrom'
async function connect(url) {
  await db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('[db] Conectada con exito!');
}

module.exports = connect;
