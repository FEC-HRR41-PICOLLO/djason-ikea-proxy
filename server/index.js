const express = require('express');
const cors = require('cors');
const app = express();
const PORT = '3001';
// Enable All CORS Requests
app.use(cors());
app.use(express.static(`${__dirname}/../public/`));
app.use(express.static(`${__dirname}/../public/css`));

app.listen(PORT, () => {
  console.log(`App listen on ${PORT}`);
});