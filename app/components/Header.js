"use client"
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';

export default function Header() {
  const router=useRouter();
  return (
    <header className="bg-white shadow-md p-4  w-full">
      <div className="container mx-auto">
        
        {/* First Row: Logo, Search, Cart */}
        <div className="flex justify-between items-center mb-2">
          <div>
            <Image
              src="/logos/ichiba.png"
              alt="Website Logo"
              width={150}
              height={50}
              onClick={()=>{router.push("/")}}
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-red-600">
              <FaSearch />
            </button>
            <button className="text-gray-700 hover:text-red-600">
              <FaShoppingCart />
            </button>
          </div>
        </div>

        {/* Second Row: Sidebar for Categories, Account */}
        <div className="flex justify-between items-center border-t pt-2">
          <div className="flex items-center space-x-4">
            <button className="lg:hidden text-gray-700 hover:text-red-600">
              <FaBars />
            </button>
            <div className="hidden lg:flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-red-600">Electronics</a>
              <a href="#" className="text-gray-700 hover:text-red-600">Clothing</a>
              <a href="#" className="text-gray-700 hover:text-red-600">Home & Kitchen</a>
              <a href="#" className="text-gray-700 hover:text-red-600">Books</a>
              <a href="/chat" className="text-red-700 hover:text-red-600">Personalized Suggestions</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton className="text-red-600 border-red-600 border-2 rounded px-4 py-2 hover:bg-red-600 hover:text-white transition-all" />
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
}
