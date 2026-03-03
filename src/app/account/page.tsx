"use client";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function Account() {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded) {
        return <div>Loading...</div>
    } if (!isSignedIn) {
        return <div>Please sign in to view your account.</div>;
    }

    // Access the email address
    const userEmail = user.primaryEmailAddress?.emailAddress;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const file = e.target.files[0];
        if(file != null) {
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    }; 

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <div style={styles.container}>
                <h1>Account</h1>
                <div style={styles.card}>
                    <h2>User Info</h2>
                    <p><strong>Email:</strong> {userEmail}</p>
                    <div style={styles.card}>
                    <h2>Profile Image</h2> 
                    {previewUrl && (
                    <img
                        src={previewUrl}
                        alt="Preview"
                        style={{ width: 150, height: 150, borderRadius: "50%" }}
                    />
                    )}
                </div>

            <input type="file" accept="image/*" onChange={handleFileChange} id="imageUpload" />
            <label
                        
                        style={{ 
                            textAlign: "left",
                            fontSize: "2em",
                            color: "black",
                            borderRadius: "5em",
                            marginTop: "1rem",
                            marginLeft: "3.5rem",
                            borderWidth: "1px" 
                            }}>Create a product or share a video!</label>
            <button onClick={() => window.location.href = "/upload"} style={{ marginTop: "1rem", padding: "10px 20px", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>
            +
            </button>
            </div>

            <button style={styles.logout} onClick={handleLogout}>
                Logout
            </button>
           
        </div>
    );
    }

    const styles = {
    container: {
        maxWidth: "600px",
        margin: "50px auto",
        padding: "20px",
        fontFamily: "Arial",
    },
    card: {
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "8px",
        marginBottom: "20px",
    },
    logout: {
        backgroundColor: "#ff4d4f",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
    },
};