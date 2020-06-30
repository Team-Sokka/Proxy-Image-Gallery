const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile('index');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});