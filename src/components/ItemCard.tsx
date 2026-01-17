import Link from 'next/link';
import Image from 'next/image';
import { Item } from '@/types';

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {item.category && (
          <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs px-3 py-1 rounded-full font-semibold">
            {item.category}
          </span>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {item.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ${item.price.toFixed(2)}
          </span>
          
          <Link
            href={`/items/${item.id}`}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}