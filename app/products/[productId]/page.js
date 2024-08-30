"use client";
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { getProductDetails } from '../../api/productDetails'; // Adjust path as needed

export default function ProductDetails() {
  const pathname = usePathname(); // Get the current pathname
  const searchParams = useSearchParams(); // Get search parameters if needed

  // Extract the productId from pathname
  const productId = pathname.split('/').pop();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (productId) {
        console.log("Product id is"+productId)
      const fetchProductDetails = async () => {
        try {
          setLoading(true);
          const data = await getProductDetails(productId);
          setProduct(data);
        } catch (error) {
          setError('Failed to fetch product details.');
        } finally {
          setLoading(false);
        }
      };
      fetchProductDetails();
    }
  }, [productId]);

  if (loading) return <div className="text-center text-gray-500">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!product) return <div className="text-center text-gray-500">Product not found</div>;

  return (
    <div className="container mx-auto p-6 bg-white mt-3 mb-2">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-3 p-6 relative">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col p-4 h-45">
              {product.image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.product_name} - thumbnail ${index + 1}`}
                  className="h-auto mb-2 object-scale-down w-24 h-24 cursor-pointer border rounded-lg"
                  onClick={() => document.querySelector('img[alt="main"]').src = img}
                />
              ))}
            </div>
            <div className="flex-1 p-4">
              <img
                src={product.image[0]}
                alt="main"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-2 p-6">
          <h1 className="text-2xl font-bold mb-4">{product.product_name}</h1>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">Price: ${product.discounted_price}</p>
          <div className="space-y-4">
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Buy Now
            </button>
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
              Add to Cart
            </button>
            <div className="flex items-center space-x-4">
              <label htmlFor="quantity" className="font-semibold">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                defaultValue="1"
                className="w-16 border border-gray-300 rounded-lg px-2 py-1"
              />
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <h2 className="text-lg font-semibold">Product Details:</h2>
            <ul className="list-disc pl-5">
              <li>✔️ Authentic products</li>
              <li>✔️ Shipped from Japan</li>
              <li>✔️ Worldwide delivery</li>
              <li>✔️ Secured checkout</li>
            </ul>
          </div>
          <div className="mt-6 space-x-4">
            <a href={`https://www.facebook.com/sharer.php?u=${product.product_url}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              Share on Facebook
            </a>
            <a href={`https://twitter.com/share?text=${encodeURIComponent(product.product_name)}&url=${product.product_url}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              Tweet on Twitter
            </a>
            <a href={`https://pinterest.com/pin/create/button/?url=${product.product_url}&media=${product.image[0]}&description=${encodeURIComponent(product.product_name)}`} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">
              Pin on Pinterest
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
