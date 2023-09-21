const express = require('express');
const app = express();
const port = 3000;

const products = [
  { id: 1, name: 'Product 1', price: 10.99, description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', price: 19.99, description: 'Description for Product 2' },
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', { products });
});

app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    res.status(404).send('Product not found');
    return;
  }

  res.render('productDetails', { product });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
