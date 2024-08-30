"use client"
import Image from "next/image";
import { useAuth } from '@clerk/nextjs'
export default function Home() {
  const { isLoaded, userId, sessionId, getToken } = useAuth()

  return (
    
   
      
      <div>
      Hello, {userId} your current active session is {sessionId}
     
     
      
     <div className="container mx-auto p-6 mt-6 bg-gray-100 rounded shadow-md">
       <h2 className="text-2xl font-bold text-gray-800 mb-4">
         Authentic Anime Merch & Japanese Products
       </h2>
       <p className="text-gray-700 mb-6">
         Ichiba Japan is your one-stop shop for Japanese products online, with a focus on anime merchandise and collectible Japanese toys. Our products are only available in Japan. Pick your favs, place your order and have your selection delivered directly to your home, anywhere in the world, directly from Japan.
       </p>
       
       <div className="flex items-center space-x-4">
         <select className="border border-gray-300 rounded px-4 py-2 bg-white text-gray-700">
           <option value="USD">USD - United States Dollar</option>
           <option value="JPY">JPY - Japanese Yen</option>
           <option value="EUR">EUR - Euro</option>
           <option value="GBP">GBP - British Pound</option>
           <option value="AUD">AUD - Australian Dollar</option>
         </select>
         <button className="text-white bg-red-600 hover:bg-red-700 transition-all px-4 py-2 rounded">
           Update
         </button>
       </div>
     </div>
    </div>
      
  );
}

