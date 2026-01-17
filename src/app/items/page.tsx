import ItemCard from '@/components/ItemCard';
import connectDB from '@/lib/mongodb';
import Item from '@/models/Item';
import { Item as ItemType } from '@/types';

export const dynamic = 'force-dynamic';

export default async function ItemsPage() {
  let items: ItemType[] = [];
  
  try {
    await connectDB();
    const itemsData = await Item.find({}).sort({ createdAt: -1 }).lean();
    items = itemsData.map((item) => ({
      id: item._id.toString(),
      name: item.name,
      description: item.description,
      price: item.price,
      image: item.image,
      category: item.category,
      createdAt: item.createdAt?.toString(),
    }));
  } catch (error) {
    console.error('Error fetching items:', error);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            All Items
          </h1>
          <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-200">
            Discover our collection of amazing products
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ItemCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-block p-8 bg-white rounded-2xl shadow-lg">
              <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <p className="text-gray-500 text-xl font-semibold">No items found.</p>
              <p className="text-gray-400 mt-2">Check back later for new products!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}