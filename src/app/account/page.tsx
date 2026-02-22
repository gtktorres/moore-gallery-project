"use client";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function AccountPage() {

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return <div>Loading...</div>;
  }

  // Access the email address
  const userEmail = user.primaryEmailAddress?.emailAddress;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

    const handleUpload = async () => {
        if (!selectedFile) return;

        setUploading(true);

        const formData = new FormData();
        formData.append("file", selectedFile);
        
        try {

            const response = await fetch(
                "https://localhost:7093/api/Buyers/upload",
                {
                    method: "POST",
                    body: formData,
                    credentials: "include", // if using cookies
                    headers: {
                    Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Upload failed");
            }

                alert("Image uploaded successfully!");
        } catch (error) {
            console.error(error);
            alert("Upload failed");
        } finally {
            setUploading(false);
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
        </div>

        <div style={styles.card}>
            <h2>Profile Image</h2>

            {previewUrl && (
            <img
                src={previewUrl}
                alt="Preview"
                style={{ width: 150, height: 150, borderRadius: "50%" }}
            />
            )}

            <input type="file" accept="image/*" onChange={handleFileChange} />

            <button onClick={handleUpload} disabled={uploading}>
            {uploading ? "Uploading..." : "Upload Image"}
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