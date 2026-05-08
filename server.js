const express = require('express');
const app = express();
const port = 3000;

// This is the data stored on the server
const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 599 }
];

// When the frontend asks for "/api/products", send the list
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});