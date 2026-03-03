// app/api/upload/route.ts or app/api/process-bytes/route.ts
import IProduct from '@/components/IProduct';
import {  NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET() {
  try {

    // Read products from local data file as the default data source.
    // If you have a real database, replace this logic with your DB client.
    const products = await fetch(`https://localhost:7093/api/Buyers/ProductsGet`)
    const productsArray = Array.from(await products.json() as IProduct[]);
    console.log('Products array:', productsArray[0].image); // Log the first product to verify the structure

    productsArray.forEach((product) => {
    console.log('is this a string?', typeof product.image); // Log the type of the image property
      const mimeType = 'image/jpeg'; // Adjust this based on your actual image type
      const imageSrc = `data:${mimeType};base64,${product.image}`; // Assuming product.image.src contains the base64 string
      product.image = imageSrc; // Assuming your IProduct has an 'image' property to hold the processed image data
    });

    return NextResponse.json(productsArray, { status: 200 });

  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { ArtItem, Amount, Currency, CustomerEmail } = req.body;

        // Call your C# backend API to create the order
        const response = await fetch('https://localhost:7093/api/Sellers/ProductCreate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ArtItem, Amount, Currency, CustomerEmail }),
        });

        const data = await response.json();
        res.status(response.status).json(data);
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}