
import "./globals.css";
import { SessionProvider } from "./context/SessionContext";
import { UserProvider } from "./context/UserContext";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
      <SessionProvider>
      <UserProvider>
        <CartProvider>
      <body className="bg-stone-200">
      <Header/>
      {children}
      <Footer/>
      </body>
      </CartProvider>
      </UserProvider>
      </SessionProvider>
      </ClerkProvider>
    </html>
  );
}
