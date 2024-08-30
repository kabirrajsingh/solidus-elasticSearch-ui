"use client";
import React from 'react';

// Sample data (replace with actual data)
const product = {
  brand: "dongli",
  compact_description: "Product Name: dongli Printed Boy's Round Neck T-Shirt\nBrand: dongli\nCategory: clothing->kids' clothing->boys wear->polos & t-shirts->dongli polos & t-shirts->dongli printed boy's round neck t-shirt (pack of 4)\nDescription: Specifications of dongli Printed Boy's Round Neck T-Shirt (Pack of 4) T-shirt Details Sleeve Half Sleeve Number of Contents in Sales Package Pack of 4 Fabric Cotton Type Round Neck Fit Regular General Details Pattern Printed Occasion Casual Ideal For Boy's In the Box 4 T Shirt Additional Details Style Code DLHBB445_BEIGE_BLACK_GYELLOW_PURPLE Fabric Care Wash with Similar Colors, Use Detergent for Colors\nSpecification: {[{\"Sleeve\", \"Half Sleeve\"}, {\"Number of Contents in Sales Package\", \"Pack of 4\"}, {\"Fabric\", \"Cotton\"}, {\"Type\", \"Round Neck\"}, {\"Fit\", \"Regular\"}, {\"Pattern\", \"Printed\"}, {\"Occasion\", \"Casual\"}, {\"Ideal For\", \"Boy's\"}, {\"4 T Shirt\"}, {\"Style Code\", \"DLHBB445_BEIGE_BLACK_GYELLOW_PURPLE\"}, {\"Wash with Similar Colors, Use Detergent for Colors\"}]}",
  description: "Specifications of dongli Printed Boy's Round Neck T-Shirt (Pack of 4) T-shirt Details Sleeve Half Sleeve Number of Contents in Sales Package Pack of 4 Fabric Cotton Type Round Neck Fit Regular General Details Pattern Printed Occasion Casual Ideal For Boy's In the Box 4 T Shirt Additional Details Style Code DLHBB445_BEIGE_BLACK_GYELLOW_PURPLE Fabric Care Wash with Similar Colors, Use Detergent for Colors",
  discounted_price: 1039.0,
  first_order_category: "clothing",
  image: [
    "http://img5a.flixcart.com/image/t-shirt/w/x/t/dlhbb445-beige-black-gyellow-purple-dongli-10-11-years-original-imaehb54gxhchxcd.jpeg",
    "http://img6a.flixcart.com/image/t-shirt/w/x/t/dlhbb445-beige-black-gyellow-purple-dongli-10-11-years-original-imaehb54gxhchxcd.jpeg",
    "http://img5a.flixcart.com/image/t-shirt/f/n/f/dlhbb445-beige-black-gyellow-purple-dongli-15-16-years-original-imaehb55kjd6g4kg.jpeg",
    "http://img6a.flixcart.com/image/t-shirt/g/y/5/dlhbb445-beige-black-gyellow-purple-dongli-12-13-years-original-imaehb54re656maf.jpeg"
  ],
  product_name: "dongli Printed Boy's Round Neck T-Shirt",
  product_url: "http://www.flipkart.com/dongli-printed-boy-s-round-neck-t-shirt/p/itmehbhxtchxzghk?pid=TSHEHBHSKBJWHFNF"
};

export default function ProductDetails() {
  return (
    <div className="container mx-auto p-6 bg-white mt-3 mb-2">
     
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-3 p-6 relative">
  {/* Main Image */}
  <div className="relative">
    <img
      src={product.image[0]}
      alt={product.product_name}
      className="w-full h-auto object-cover rounded-lg"
    />
  </div>

  {/* Thumbnails */}
  <div className="absolute top-0 right-0 md:top-auto md:right-auto md:bottom-0 md:left-0 p-4 md:relative flex md:flex-col space-x-2 md:space-x-0 md:space-y-2">
    {product.image.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`${product.product_name} - thumbnail ${index + 1}`}
        className="w-20 h-20 object-cover cursor-pointer border rounded-lg"
        onClick={() => document.querySelector('img[alt="main"]').src = img}
      />
    ))}
  </div>
</div>

          <div className="md:col-span-2  p-6">
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