"use client";
import { useState } from 'react';
import React from 'react';
import '../styles/globals.css'; // Ensure you have the correct path to your CSS file

const formRef = React.createRef();
const UploadForm = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [images, setImages] = useState([]);
    const [video, setVideo] = useState(null);

      console.log(status);
    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        };

    const handleSubmit = async (e) => {
            e.preventDefault();
            setStatus('Uploading...');

            const res = await products.POST(formData);
            alert(`Thank you ${formData.name}! We will contact you at ${formData.email}.`);
                    if (formRef.current) {
                    formRef.current.reset(); // Reset the form after submission
                    }
            const result = await res.text();
            setStatus(result);
        };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        const imagePreviews = files.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
            }));

            setImages(imagePreviews);
        };

    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        if (file.size > 50 * 1024 * 1024) {
            alert("Video must be under 50MB");
            return;
        }
        if (file) {
            setVideo({
            file,
            preview: URL.createObjectURL(file),
            });
        }
    };

    return(
        <form ref={formRef}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
                    <div>
                      <label
                        style={{ 
                          textAlign: "left",
                          fontSize: "2em",
                          color: "black",
                          borderRadius: "5em",
                          marginLeft: "3.5rem",
                          borderWidth: "1px"
                        }}
                      >
                        Name
                      <input
                        type="name"
                        name="Enter your name"
                        required
                        onChange={handleChange}
                        style={{ padding: "1rem", alignContent: "center", color: "black", fontSize: "2rem", borderRadius: "25px", display: "block", width: "80%", height: "4rem",  marginBottom: "1rem", background: "hsla(240, 11%, 93%, 0.902)"}}
                      />
                      </label>
                    </div>
                    <div>
                        <label 
                            style={{ 
                                textAlign: "left",
                                fontSize: "2em",
                                color: "black",
                                borderRadius: "5em",
                                marginLeft: "3.5rem",
                                borderWidth: "1px" 
                            }}
                        >
                            Description
                            <input
                            type="name"
                            name="description"
                            required
                            onChange={handleChange}
                            border-radius="25px"
                            style={{ padding: "1rem", alignContent: "center", color: "black",  fontSize: "2rem", borderRadius: "25px", display: "block", width: "80%", height: "4rem", background: "hsla(240, 11%, 93%, 0.902)"  }}
                            />
                        </label>
                    </div>
                      <div>
                        <label 
                            style={{ 
                                textAlign: "left",
                                fontSize: "2em",
                                color: "black",
                                borderRadius: "5em",
                                marginTop: "1rem",
                                marginLeft: "3.5rem",
                                borderWidth: "1px" 
                            }}
                        >
                            Price
                            <input
                            type="name"
                            name="price"
                            required
                            onChange={handleChange}
                            border-radius="25px"
                            style={{ padding: "1rem", alignContent: "center", color: "black",  fontSize: "2rem", borderRadius: "25px", display: "block", width: "80%", height: "4rem", background: "hsla(240, 11%, 93%, 0.902)"  }}
                            />
                        </label>
                    </div>
                      <div>
                        <label 
                            htmlFor="imageUpload"
                            style={{ 
                                textAlign: "left",
                                fontSize: "2em",
                                color: "black",
                                borderRadius: "5em",
                                marginTop: "1rem",
                                marginLeft: "3.5rem",
                                borderWidth: "1px" 
                            }}
                        >
                            Product Image
                            
                            <div id="imagePreview">
                                {images.map((image) => (
                                    <img key={image.preview} src={image.preview} alt="Preview" style={{ width: "150px", margin: "10px", borderRadius: "8px" }} />
                                ))}
                            </div>
                            <input
                                type="file" 
                                id="imageUpload" 
                                name="images" 
                                accept="image/*" 
                                multiple 
                                onChange={handleImageChange}
                                style={{ fontSize: ".5em",
                                fontWeight: "bold",
                                color: "#0a4e9c",
                                backgroundColor: "hsla(240, 11%, 93%, 0.902)",
                                cursor: "pointer" }}
                            />
                        </label>
                    </div>
                    <div>
                        <label 
                            for="videoUpload"
                            style={{
                                textAlign: "left",
                                fontSize: "2em",
                                color: "black",
                                borderRadius: "5em",
                                marginTop: "1rem",
                                marginLeft: "3.5rem",
                                borderWidth: "1px"
                            }}
                        >
                            Product Video
                            <div id="videoPreview">
                                {video && (
                                    <video controls style={{ width: "300px", margin: "10px", borderRadius: "8px" }}>
                                        <source src={video.preview} type={video.file.type} />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>
                            <input
                                type="file" 
                                id="videoUpload"
                                name="video"
                                accept="video/*"
                                onChange={handleVideoChange}
                                style={{ fontSize: ".5em",
                                fontWeight: "bold",
                                color: "#0a4e9c",
                                backgroundColor: "hsla(240, 11%, 93%, 0.902)",
                                cursor: "pointer" }}
                            />
                        </label>
                    </div>
                    <div>
                            <hr style={{width:"100%", margin:"1rem"}}></hr>
                    </div>
                    <div>
                        <label
                            style={{ 
                                textAlign: "left",
                                borderRadius: "5em",
                                marginLeft: "5rem",
                                borderWidth: "1px" 
                            }}
                        >
                            <button
                                type="submit"
                                style={{ 
                                fontSize: "1.5em",
                                fontWeight: "bold",
                                textAlign: "center",
                                color: "hsla(0,0%,100%,1)",
                                borderRadius: "5em",
                                marginLeft: "3.5rem",
                                marginTop: "2rem",
                                borderWidth: "1px",
                                backgroundColor: "#0a4e9c",
                                padding: "1rem 2rem",
                                display: "block",
                                width: "75%",
                                height: "5rem",
                                cursor: "pointer"
                                }}
                                onClick={() => handleSubmit}
                            >
                                Submit
                            </button>
                        </label>
                    </div>
                
                </div>
            </form>
    );
}
    
export default UploadForm;