import mongoose from 'mongoose';

var connectWithRetry = function () {
  mongoose
    .connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to DB');
    })
    .catch((err) => {
      console.log('err and connect with retry after 1p', err);
      setTimeout(() => connectWithRetry(), 60000)
    });

};
connectWithRetry();
