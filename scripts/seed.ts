import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env.local') });

const MONGODB_URI = process.env.MONGODB_URI!;

const itemsData = [
  {
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=300&fit=crop',
    category: 'Electronics',
  },
  {
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with health monitoring, GPS, and water resistance. Track your fitness goals.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=300&fit=crop',
    category: 'Electronics',
  },
  {
    name: 'Coffee Maker',
    description: 'Premium coffee maker with programmable settings and thermal carafe. Brew the perfect cup every time.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=300&fit=crop',
    category: 'Home & Kitchen',
  },
  {
    name: 'Running Shoes',
    description: 'Comfortable running shoes with advanced cushioning and breathable mesh. Designed for performance.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=300&fit=crop',
    category: 'Sports',
  },
  {
    name: 'Laptop Backpack',
    description: 'Durable laptop backpack with multiple compartments and USB charging port. Perfect for travel and work.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=300&fit=crop',
    category: 'Accessories',
  },
  {
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with 360-degree sound and waterproof design. Take your music anywhere.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=300&fit=crop',
    category: 'Electronics',
  },
];

const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String,
}, { timestamps: true });

const Item = mongoose.models.Item || mongoose.model('Item', ItemSchema);

async function seed() {
  try {
    console.log('🌱 Starting database seed...');
    
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing items
    await Item.deleteMany({});
    console.log('🗑️  Cleared existing items');

    // Insert new items
    const items = await Item.insertMany(itemsData);
    console.log(`✅ Inserted ${items.length} items`);

    console.log('🎉 Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seed();