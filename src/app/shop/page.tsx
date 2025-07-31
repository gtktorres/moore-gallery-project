"use client";
//import { useEffect, useState } from 'react';

const products = [
  {
    "id": 1,
    "name": "Product 1",
    "price": 29.99,
    "description": "This is a great product."
  },
  {
    "id": 2,
    "name": "Product 2",
    "price": 49.99,
    "description": "This product is even better!"
  },
  {
    "id": 3,
    "name": "Product 3",
    "price": 19.99,
    "description": "An affordable option."
  },
  {
    "id": 4,
    "name": "Product 4",
    "price": 29.99,
    "description": "An affordable option."
  },
  {
    "id": 5,
    "name": "Product 5",
    "price": 19.99,
    "description": "This product is even better!"
  },
  {
    "id": 6,
    "name": "Product 6",
    "price": 49.99,
    "description": "An affordable option."
  },
  {
    "id": 7,
    "name": "Product 7",
    "price": 19.99,
    "description": "This is a great product."
  },
  {
    "id": 8,
    "name": "Product 8",
    "price": 29.99,
    "description": "This is a great product."
  },
  {
    "id": 9,
    "name": "Product 9",
    "price": 49.99,
    "description": "This product is even better!"
  },
  {
    "id": 10,
    "name": "Product 10",
    "price": 19.99,
    "description": "An affordable option."
  },
  {
    "id": 11,
    "name": "Product 11",
    "price": 29.99,
    "description": "An affordable option."
  },
  {
    "id": 12,
    "name": "Product 12",
    "price": 19.99,
    "description": "This product is even better!"
  },
  {
    "id": 13,
    "name": "Product 13",
    "price": 49.99,
    "description": "An affordable option."
  },
  {
    "id": 14,
    "name": "Product 14",
    "price": 19.99,
    "description": "This is a great product."
  },
  {
    "id": 15,
    "name": "Product 15",
    "price": 29.99,
    "description": "This is a great product."
  }
];

const Shop = () => {
//   const [products, setProducts] = useState([{}]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await fetch('/api/products');
//       const data = await response.json();
//       setProducts(data);
//     };

//     fetchProducts();
//   }, []);

  return (
    <div>
      <main>
        <div className={`main-content`} style={{ marginBottom:"6rem", marginTop: "2.5rem", textAlign: "center" }}>
          <h1 style={{fontSize:"10em"}}>Shop</h1>
          <p style={{textAlign:"center"}}>Welcome to our shop! Here are some of our products:</p>
        </div>
      
    <div className="container-shop">
        {products.map((product: { id: number; name: string; price: number; description: string }) => (
            <div className="shop-item" key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
            </div>
        ))}
    </div>
        </main>
    </div>
  );
};

export default Shop;