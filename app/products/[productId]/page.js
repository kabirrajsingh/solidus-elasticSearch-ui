"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getProductDetails } from '../../api/productDetails';
import Notification from '../../components/Notification'; // Import the Notification component
import ProductReviewChart from '../../components/ProductReviewChart'; // Import the ProductReviewChart component
import { useCart } from '../../context/CartContext'; // Import the Cart context
import { getProductReviewScores } from '@/app/api/productReviewScore';

export default function ProductDetails() {
  const pathname = usePathname();
  const productId = pathname.split('/').pop();

  const [product, setProduct] = useState(null);
  const [reviewScores, setReviewScores] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  const { addToCart } = useCart(); // Access the addToCart function from CartContext

  useEffect(() => {
    if (!productId) return;

    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const data = await getProductDetails(productId);
        setProduct(data);
        console.log(data)
      } catch (error) {
        setError('Failed to fetch product details.');
      } finally {
        setLoading(false);
      }
    };

    const fetchReviewScores = async () => {
      try {
        const data = await getProductReviewScores(productId); // Pass productId to getReviewScores
        setReviewScores(data);
      } catch (error) {
        setError('Failed to fetch review scores.');
      }
    };

    fetchProductDetails();
    fetchReviewScores();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product); // Add the product to the cart
      setShowNotification(true);
    }
  };

  const parseDescription = (description) => {
    // Split the description into sections
    const sections = description.split(/,(?=\s*Specifications of )/);
  
    // Extract key features and specifications sections
    const keyFeaturesSection = sections[0];
    const specsSection = sections[1] || '';
  
    // Extract key features
    const keyFeatures = keyFeaturesSection.split("Description:")[1]
      .split("Price:")[0]
      .trim()
      .replace(/(?:\r\n|\r|\n)/g, '\n'); // Normalize newlines
  
    // Extract specifications and convert them into a JSON-like format
    let specDetails = [];
    if (specsSection) {
      const specsStr = specsSection.split("Specification:")[1].trim();
  
      // Manually parse the specification section into an array of [attribute, value]
      const specsArray = specsStr.match(/\{[^}]+\}/g);
      if (specsArray) {
        try {
          specDetails = JSON.parse(specsArray[0]);
        } catch (error) {
          console.error('Failed to parse JSON from specDetails:', error);
        }
      }
    }
  
    // Convert the specification details into an array of [attribute, value]
    const parsedSpecDetails = Array.isArray(specDetails) 
      ? specDetails 
      : Object.entries(specDetails);
  
    return {
      keyFeatures,
      specDetails: parsedSpecDetails
    };
  };
  
  
  

  // Ensure the product exists before parsing its description
  const { keyFeatures, specs, specDetails } = product ? parseDescription(product.compact_description) : { keyFeatures: '', specs: '', specDetails: [] };

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
          <p className="text-xl font-semibold mb-4">Price: ${product.discounted_price}</p>
          <div className="space-y-4">
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Buy Now
            </button>
            <button 
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
              onClick={handleAddToCart} // Add to cart handler
            >
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
          
          {/* Product Description Section */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Product Description</h2>
            <p className="text-lg text-gray-700 mb-4">{specs}</p>
            
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="list-disc list-inside mb-4">
              {keyFeatures.split("\n").map((feature, index) => (
                <li key={index} className="text-gray-600">{feature.trim()}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-2">Specifications</h3>
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b">Attribute</th>
                  <th className="py-2 px-4 border-b">Value</th>
                </tr>
              </thead>
              <tbody>
                {specDetails.map(([attribute, value], index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{attribute}</td>
                    <td className="py-2 px-4 border-b">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Display Product Review Scores */}
          
        </div>
      </div>
      {reviewScores && (
            <ProductReviewChart data={reviewScores} />
          )}  
      {/* Show notification when a product is added to the cart */}
      {showNotification && (
        <Notification
          message="Product added to cart!"
          type="success"
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  );
}
