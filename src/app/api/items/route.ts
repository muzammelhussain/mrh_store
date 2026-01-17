import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Item from '@/models/Item';

// GET all items
export async function GET() {
  try {
    await connectDB();
    const items = await Item.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json(items, { status: 200 });
  } catch (error) {
    console.error('Error fetching items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch items' },
      { status: 500 }
    );
  }
}

// POST create new item
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    
    const { name, description, price, image, category } = body;
    
    if (!name || !description || !price || !image) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const item = await Item.create({
      name,
      description,
      price: parseFloat(price),
      image,
      category: category || 'Other',
    });
    
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error('Error creating item:', error);
    return NextResponse.json(
      { error: 'Failed to create item' },
      { status: 500 }
    );
  }
}