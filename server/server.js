const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Mock data
let items = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
    price: 199.99,
    image: 'https://i.ibb.co.com/1YPGx6KT/10644-img-2021-11-29-050518-64236929.webp',
    category: 'Electronics',
    createdAt: '2024-01-01'
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with health monitoring, GPS, and water resistance.',
    price: 299.99,
    image: 'https://i.ibb.co.com/Zz0jzk7W/1.jpg',
    category: 'Electronics',
    createdAt: '2024-01-02'
  },
  {
    id: '3',
    name: 'Coffee Maker',
    description: 'Premium coffee maker with programmable settings and thermal carafe.',
    price: 149.99,
    image: 'https://i.ibb.co.com/m5fWHR2P/693e851be33579bf2e08deec-mixpresso-drip-coffee-maker-coffee-6.jpg',
    category: 'Home & Kitchen',
    createdAt: '2024-01-03'
  }
];

// Routes
app.get('/api/items', (req, res) => {
  res.json(items);
});

app.get('/api/items/:id', (req, res) => {
  const item = items.find(item => item.id === req.params.id);
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.json(item);
});

app.post('/api/items', (req, res) => {
  const { name, description, price, image, category } = req.body;
  
  if (!name || !description || !price || !image) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  const newItem = {
    id: Date.now().toString(),
    name,
    description,
    price: parseFloat(price),
    image,
    category: category || 'Other',
    createdAt: new Date().toISOString()
  };
  
  items.push(newItem);
  res.status(201).json(newItem);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
//mongodb+srv://mrh_store:MJy57897eGI6N1y8@keramot.mqb48yw.mongodb.net/?appName=Keramot
