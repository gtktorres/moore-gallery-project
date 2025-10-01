import type { NextApiRequest, NextApiResponse } from 'next';

export default async function getData(req: NextApiRequest, res: NextApiResponse){
    if(req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
    res.status(200).json({ message: 'This is protected data' });
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:5000/api/protected', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (response.ok) {
        const data = await response.json();
        // Handle the data
        console.log(data);
    } else {
        // Handle error (e.g., token expired)
        console.error('Access denied');
    }
};
