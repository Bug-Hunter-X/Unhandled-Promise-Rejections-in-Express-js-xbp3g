const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.send('Hello');
  }).catch(err => {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error'); //Send a proper error response
  });
});
const someAsyncOperation = () => {
  return new Promise((resolve, reject) => {
    //Simulate an error
    reject(new Error('Something went wrong'));
  });
}
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});