import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import connectDB from '@/lib/mongodb';
import Item from '@/models/Item';

interface ItemDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ItemDetailPage({ params }: ItemDetailPageProps) {
  const { id } = await params;
  
  let item = null;
  
  try {
    await connectDB();
    const itemData = await Item.findById(id).lean();
    
    if (itemData) {
      item = {
        id: itemData._id.toString(),
        name: itemData.name,
        description: itemData.description,
        price: itemData.price,
        image: itemData.image,
        category: itemData.category,
        createdAt: itemData.createdAt?.toString(),
      };
    }
  } catch (error) {
    console.error('Error fetching item:', error);
  }

  if (!item) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/items"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Items
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative h-96 lg:h-[500px]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {item.name}
            </h1>
            {item.category && (
              <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                {item.category}
              </span>
            )}
          </div>

          <div className="text-4xl font-bold text-blue-600">
            ${item.price.toFixed(2)}
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Description
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Product Details
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-600">Item ID:</span>
                  <span className="ml-2 text-gray-900">{item.id}</span>
                </div>
                {item.createdAt && (
                  <div>
                    <span className="font-medium text-gray-600">Added:</span>
                    <span className="ml-2 text-gray-900">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
            <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Related Items
        </h2>
        <div className="text-center py-8 text-gray-500">
          Related items would appear here in a full implementation
        </div>
      </div>
    </div>
  );
}