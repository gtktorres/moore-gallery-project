// pages/api/orders/create.js
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { ArtItem, Amount, Currency, CustomerEmail } = req.body;

        // Call your C# backend API to create the order
        const response = await fetch('http://your-csharp-backend-url/api/orders/create', {
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
