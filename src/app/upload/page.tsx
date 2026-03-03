"use client";
import UploadForm from '@/components/UploadForm';

const Upload = () => {
    return (
        <div>
            <main>
                <div className={`main-content`} style={{ margin: "2rem", textAlign: "center" }}>
                    <h1 style={{color:"hsla(240, 69%, 46%, 0.90)"}}>Upload Your Art</h1>
                </div>
                <div className="container-upload" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", marginBottom:"6rem"}}>
                    <UploadForm />
                </div>
            </main>
        </div>
    );
}

export default Upload;