import type { NextApiRequest, NextApiResponse} from 'next';

export default async function getData(req: NextApiRequest){
    const res = {} as NextApiResponse;

    if(req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
    const token = localStorage.getItem('token');
    const response = await fetch('https://localhost:7093', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (response.ok) {
        const data = await response.json();
        res.status(200).json(data);
        console.log(data);
        return data;
    } else {
        // Handle error (e.g., token expired)
        console.error('Access denied');
    }
}