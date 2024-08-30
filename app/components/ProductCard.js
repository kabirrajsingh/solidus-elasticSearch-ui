// components/ProductCard.js
import { useRouter } from 'next/navigation';

const ProductCard = ({ product }) => {
  const router = useRouter();

  const handleCardClick = () => {
    window.open(`/products/${product._id}`, '_blank'); // Opens in a new tab
  };

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      <img
        src={product.image[0]}
        alt={product.product_name}
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800 truncate">{product.product_name}</h2>
      <p className="text-gray-600 mt-1 text-sm truncate">{product.compact_description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xl font-bold text-red-600">{`$${product.discounted_price.toFixed(2)}`}</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
