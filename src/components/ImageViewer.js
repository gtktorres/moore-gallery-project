import { useEffect, useState } from 'react';

const ImageViewer = ({ imageId }) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      // Replace with your actual API endpoint
      const res = await fetch(`http://localhost:5000/api/image/${imageId}`);
      const data = await res.json();
      
      if (data.imageData) {
        // Construct the data URL for display
        setImageSrc(`data:image/jpeg;base64,${data.imageData}`);
      }
    };

    fetchImage();
  }, [imageId]);

  if (!imageSrc) {
    return <div>Loading image...</div>;
  }

  // Use a standard <img> tag
  return <img src={imageSrc} alt="Fetched from API" />;
};

export default ImageViewer;
