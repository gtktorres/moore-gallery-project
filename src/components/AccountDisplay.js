"use client";
import { useUser } from "@clerk/nextjs";
import { useState } from 'react';
import { styles } from '../styles/globals.css';
import Image from 'next/image';
const placeholderUrl = ('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnlzNHNhYTlvanh0ZHB2cWRmeTdoeGxoMHZqNmZwd2lpbWM0Nm5lNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1d5KycX3jcCyhGicqO/giphy.gif');


export default function AccountDisplay() {
  
    const [selectedFile, setSelectedFile] = useState(new File([], ""));
    const [previewUrl, setPreviewUrl] = useState(placeholderUrl);
    const { isLoaded, user } = useUser();
    
    if (!isLoaded) {
        return <div>Loading...</div>
    }
// Access the email address
    const userEmail = user.primaryEmailAddress.emailAddress;
    //user?.primaryEmailAddress?.emailAddress;

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
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
                <div style={{marginTop: "2rem"}}>
                    <h2 style={{fontSize: "3rem"}}>User Info:</h2>
                    <div style={{marginTop: "2rem"}}>
                        <h2>Email: {userEmail}</h2>
                    </div>
                    <div style={styles?.card}>
                        
                            <div className="profile-pic-container">
                                
                                <Image
                                            className="profile-pic"
                                            alt="Profile Picture"
                                            src={previewUrl != null ? previewUrl : videoUrl}
                                            width={100}
                                            height={100}
                                            unoptimized
                                />
                                <button className="add-button" type="file" accept="image/*" onChange={handleFileChange} id="imageUpload">+</button>

                            </div>                        
                    </div>

                    <div style={styles?.card}>
                    <label
                        
                        style={{ 
                            textAlign: "left",
                            fontSize: "2em",
                            color: "black",
                            borderRadius: "5em",
                            marginTop: "2rem",
                            borderWidth: "1px" 
                            }}>Create a product or share a video!
                    </label>
                    <div style={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
                        <button onClick={() => window.location.href = "/upload"} style={{ marginBottom: "1rem", padding: "10px 20px", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>
                        +
                        </button>
                    </div>
                </div>
            <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button style={{ backgroundColor: "red", color: "white", padding: "10px 20px", border: "none", borderRadius: "6px", cursor: "pointer" }} onClick={handleLogout}>
                    Logout
                </button>
            </div> 
            </div>
                      
        </div>
  );
}
