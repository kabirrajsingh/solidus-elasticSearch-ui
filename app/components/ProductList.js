// components/ProductList.js
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  if (!products || products.length === 0) return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8 my-4 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
