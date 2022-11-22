const mongoose = require('mongoose');
const { config } = require('dotenv');

config();

function connect() {
  mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('db connected')
  );
}

module.exports = connect;
