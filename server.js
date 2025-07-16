const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// serve file tĩnh (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Nếu index.html ở root thì dùng __dirname
// app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
