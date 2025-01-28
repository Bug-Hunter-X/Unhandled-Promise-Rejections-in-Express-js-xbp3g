const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.send('Hello');
  }).catch(err => {
    // Error handling is missing here. Express.js doesn't automatically handle these
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});