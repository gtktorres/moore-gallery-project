"use client";
import { useUser } from "@clerk/nextjs";
import { useState } from 'react';
import { styles } from '../styles/globals.css';
import Image from 'next/image';
const videoUrl = ('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnlzNHNhYTlvanh0ZHB2cWRmeTdoeGxoMHZqNmZwd2lpbWM0Nm5lNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1d5KycX3jcCyhGicqO/giphy.gif');


export default function AccountDisplay() {
  
    const [selectedFile, setSelectedFile] = useState(new File([], ""));
    const [previewUrl, setPreviewUrl] = useState(videoUrl);
    const { isLoaded, isSignedIn, user } = useUser();
    
    if (!isLoaded) {
        return <div>Loading...</div>
    } if (!isSignedIn) {
        return <div>Please sign in to view your account.</div>;
    }
// Access the email address
    const userEmail = user.primaryEmailAddress?.emailAddress;

    const handleFileChange = (e) => {
        if (!e.target.files) return;

        const file = e.target.files[0];
        if(file != null) {
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }else {
            setPreviewUrl(URL.createObjectURL(new File([selectedFile], "about-image.jpeg", { type: "image/jpeg" })));
        }
    }; 

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

  return (
    <div style={styles?.container}>
                <h1>Account</h1>
                <div style={styles?.card}>
                    <h2>User Info</h2>
                    <div style={styles?.card}>
                        <h2>Email: {userEmail}</h2>
                    </div>
                    <div style={styles?.card}>
                        
                            <div style={styles?.card}>
                                
                                <Image
                                            width={1000} alt="Video"
                                            height={500} src={previewUrl != null ? previewUrl : videoUrl}
                                            style={{borderRadius: "10px"}}
                                            unoptimized
                                />

                            </div>

                        
                    </div>

                    <div style={styles?.card}>
                    <input type="file" accept="image/*" onChange={handleFileChange} id="imageUpload" />
                    <label
                        
                        style={{ 
                            textAlign: "left",
                            fontSize: "2em",
                            color: "black",
                            borderRadius: "5em",
                            marginTop: "1rem",
                            borderWidth: "1px" 
                            }}>Create a product or share a video!
                    </label>

            <button onClick={() => window.location.href = "/upload"} style={{ marginTop: "1rem", padding: "10px 20px", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>
            +
            </button>
            </div>
            </div>

            <button style={styles?.logout} onClick={handleLogout}>
                Logout
            </button>
           
        </div>
  );
}
