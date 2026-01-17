import mongoose, { Schema, Model } from 'mongoose';

export interface IItem {
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ItemSchema = new Schema<IItem>(
  {
    name: {
      type: String,
      required: [true, 'Please provide an item name'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price'],
      min: [0, 'Price cannot be negative'],
    },
    image: {
      type: String,
      required: [true, 'Please provide an image URL'],
    },
    category: {
      type: String,
      default: 'Other',
    },
  },
  {
    timestamps: true,
  }
);

const Item: Model<IItem> = mongoose.models.Item || mongoose.model<IItem>('Item', ItemSchema);

export default Item;