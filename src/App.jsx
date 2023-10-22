import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

import productImg1 from "./images/image-product-1.jpg";
import productImg2 from "./images/image-product-2.jpg";
import productImg3 from "./images/image-product-3.jpg";
import productImg4 from "./images/image-product-4.jpg";

const ITEMS = [
  {
    id: 1,
    company: "Sneaker Company",
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 250,
    discount: 0.5,
    images: [
      { url: productImg1, alt: "Product Image 1" },
      { url: productImg2, alt: "Product Image 2" },
      { url: productImg3, alt: "Product Image 3" },
      { url: productImg4, alt: "Product Image 4" },
    ],
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addCartItem(newItem) {
    const cartItemIndex = cartItems.findIndex((item) => item.id === newItem.id);
    if (cartItemIndex !== -1) {
      setCartItems([
        ...cartItems.slice(0, cartItemIndex),
        newItem,
        ...cartItems.slice(cartItemIndex + 1),
      ]);
    } else {
      setCartItems([...cartItems, newItem]);
    }
  }
  function getItemByID(id) {
    return ITEMS.find((item) => item.id === id);
  }
  function deleteCartItem(id) {
    setCartItems(cartItems.filter((item) => item.id !== id));
  }

  return (
    <>
      <Header
        cartItems={cartItems}
        getItemByID={getItemByID}
        deleteCartItem={deleteCartItem}
      />
      <Main addCartItem={addCartItem} item={getItemByID(1)} />
    </>
  );
}

export default App;