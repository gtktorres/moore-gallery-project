"use client";
//import { useEffect, useState } from 'react';
import Image from 'next/image';
import Art0 from '../../components/Project-Images/Connie Art/1E239547-B299-4780-9949-2BC2B4664FD9.jpeg';
import Art1 from '../../components/Project-Images/Connie Art/8E30BA39-0E48-4722-B812-38FF2D3E7844.jpeg';
import Art2 from '../../components/Project-Images/Connie Art/394BEFEB-8975-4D43-8364-2F25DFD153C9.jpeg';
import Art3 from '../../components/Project-Images/Connie Art/8669A082-06CB-49CF-95AC-E6453B45F858.jpeg';
import Art4 from '../../components/Project-Images/Connie Art/1E239547-B299-4780-9949-2BC2B4664FD9.jpeg';
import Art5 from '../../components/Project-Images/Connie Art/973454FB-50C8-4DA7-8E5A-0A403BF446A5.jpeg';
import Art6 from '../../components/Project-Images/Connie Art/B9FC5A7C-AD20-4967-AD49-824410F7FC22.jpeg';
import Art7 from '../../components/Project-Images/Connie Art/BF2A9F2A-07C9-46BE-A528-BBA7D25B5E7A.jpeg';
import Art8 from '../../components/Project-Images/Connie Art/C204BD0D-42D5-4F44-89E0-D1B6A36F8562.jpeg';
import Art9 from '../../components/Project-Images/Connie Art/CCEF7CEC-BCFB-4139-9C37-F2380B69A5C7.jpeg';
import Art10 from '../../components/Project-Images/Connie Art/E0E4B70C-ADF8-4CEA-830B-EF3479602C81.jpeg';
import Art11 from '../../components/Project-Images/Connie Art/E9166E15-D139-43A5-9911-F88B87C5367E.jpeg';
import Art12 from '../../components/Project-Images/Connie Art/FB285C43-8846-41D4-A87A-61DF535F1430.jpeg';
import Art13 from '../../components/Project-Images/Connie Art/1E239547-B299-4780-9949-2BC2B4664FD9.jpeg';
import Art014 from '../../components/Project-Images/Connie Art/8E30BA39-0E48-4722-B812-38FF2D3E7844.jpeg';
import OrderModal from '../../components/OrderModal';
import OrderIcon from '@/components/OrderIcon';
import OrderAdd from '@/components/OrderAdd';
import { OrderProvider, useOrder } from '@/components/OrderContext';
import { CartProvider } from '@/components/CartContext';

const products = [
  {
    "id": 1,
    "image": Art0,
    "name": "Product 1",
    "price": 29.99,
    "description": "This is a great product."
  },
  {
    "id": 2,
    "image": Art1,
    "name": "Product 2",
    "price": 49.99,
    "description": "This product is even better!"
  },
  {
    "id": 3,
    "image": Art2,
    "name": "Product 3",
    "price": 19.99,
    "description": "An affordable option."
  },
  {
    "id": 4,
    "image": Art3,
    "name": "Product 4",
    "price": 29.99,
    "description": "An affordable option."
  },
  {
    "id": 5,
    "image": Art4,
    "name": "Product 5",
    "price": 19.99,
    "description": "This product is even better!"
  },
  {
    "id": 6,
    "image": Art5,
    "name": "Product 6",
    "price": 49.99,
    "description": "An affordable option."
  },
  {
    "id": 7,
    "image": Art6,
    "name": "Product 7",
    "price": 19.99,
    "description": "This is a great product."
  },
  {
    "id": 8,
    "image": Art7,
    "name": "Product 8",
    "price": 29.99,
    "description": "This is a great product."
  },
  {
    "id": 9,
    "image": Art8,
    "name": "Product 9",
    "price": 49.99,
    "description": "This product is even better!"
  },
  {
    "id": 10,
    "image": Art9,
    "name": "Product 10",
    "price": 19.99,
    "description": "An affordable option."
  },
  {
    "id": 11,
    "image": Art10,
    "name": "Product 11",
    "price": 29.99,
    "description": "An affordable option."
  },
  {
    "id": 12,
    "image": Art11,
    "name": "Product 12",
    "price": 19.99,
    "description": "This product is even better!"
  },
  {
    "id": 13,
    "image": Art12,
    "name": "Product 13",
    "price": 49.99,
    "description": "An affordable option."
  },
  {
    "id": 14,
    "image": Art13,
    "name": "Product 14",
    "price": 19.99,
    "description": "This is a great product."
  },
  {
    "id": 15,
    "image": Art014,
    "name": "Product 15",
    "price": 29.99,
    "description": "This is a great product."
  }
];

const Shop = () => {
  const isOrderOpen  = useOrder();
  return (
    <div>
      <main>
            <div className={`main-content`} style={{ marginBottom:"6rem", marginTop: "2.5rem", textAlign: "center" }}>
                <h1 style={{fontSize:"10em"}}>Shop</h1>
                <p style={{textAlign:"center"}}>Welcome to our shop! Here are some of our products:</p>
            </div>
            <div className="container-shop">
                {products.map((product: { id: number; name: string; price: number; description: string; image: import("next/image").StaticImageData }) => (
                    <div className="shop-item" key={product.id}>
                        <div className="shop-item-image">
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={300}
                            height={300}
                            style={{ borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", objectFit: "cover" }}
                        />
                        </div>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p> 
                          <OrderProvider>                       
                            <div id="order-modal-root" className={`main-content ${isOrderOpen ? 'shifted' : ''}`}>
                              <CartProvider><OrderAdd item={product} /></CartProvider>
                              <OrderIcon />
                              <OrderModal />
                            </div>
                          </OrderProvider>                       
                    </div>
                ))}
            </div>
        </main>
    </div>
  );
};

export default Shop;