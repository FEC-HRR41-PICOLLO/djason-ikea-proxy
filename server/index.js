const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = '4000';
// Enable All CORS Requests
app.use(cors());

const public = path.join(__dirname, '/../public/');

app.use(express.static(public));
app.use('/:id',express.static(public));

app.listen(PORT, () => {
  console.log(`App listen on ${PORT}`);
});