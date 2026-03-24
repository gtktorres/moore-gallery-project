import { redirect } from "next/dist/server/api-utils";

export default async function Login(email: string, password: string) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:7093/api/Logins/login', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: formData
    });

    if (response.ok) {
        redirect('/account');
        
    } else {
        // Handle error (e.g., token expired)
        console.error('Access denied');
    }
};
