import { NextApiRequest, NextApiResponse } from 'next';

export{};
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const user = async() =>await fetch("https://localhost:7093/api/users/sync", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            clerkUserId: user.name,
            email: user.length,
        })
        })

        const data = user.toString;
        res.status(200).json(data);
    }else{
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}