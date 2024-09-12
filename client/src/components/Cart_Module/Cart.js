import React, { useState } from 'react';

function Cart() {
  // State to keep track of items in the cart
  const [itemsInCart, setItemsInCart] = useState([]);

  return (
    <div className='w-full bg-white py-16 px-4'>
      <h3 className='text-black font-bold text-2xl text-center'>
        Shopping Cart
      </h3>
      {itemsInCart.length === 0 ? (
        <p className='text-center mt-8'>Your cart is empty.</p>
      ) : (
        <div className='w-full max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0'>
          {/* Display items in the cart */}
          {itemsInCart.map((item, index) => (
            <div key={index} className='flex flex-col justify-center'>
              {/* Display item det42  1Q1 aails */}
              <p className='text-[#00fd9a] font-bold text-center md:text-left'>{item.name}</p>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold text-center md:text-left py-4'>{item.description}</h1>
              <p className='text-center md:text-left'>{item.details}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;