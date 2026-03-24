"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import EmblaCarousel from './EmblaCarousel';
const videoUrl = ('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnlzNHNhYTlvanh0ZHB2cWRmeTdoeGxoMHZqNmZwd2lpbWM0Nm5lNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1d5KycX3jcCyhGicqO/giphy.gif');


const LIVE_STREAM_EMBED_URL = process.env.LIVE_STREAM_EMBED_URL || 'YOUR_LIVE_STREAM_EMBED_URL';
function ContentDisplay() {
  const [isLiveStreamAvailable, setIsLiveStreamAvailable] = useState(false);

  useEffect(() => {
    // In a real application, you would fetch this status from an API
    // For demonstration, we'll simulate a check
    const checkLiveStreamStatus = async () => {
      // Replace with your actual API call to check for live stream
      const response = await fetch('/api/live-stream-status'); 
      const data = await response.json();
      setIsLiveStreamAvailable(data.isLive);
    };

    checkLiveStreamStatus();
    // You might want to set up an interval to regularly check for live stream status
    const interval = setInterval(checkLiveStreamStatus, 30000); // Check every 30 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const slides = [
    <div className="slide" key="slide-1">
        <Image
            width={1000} alt="Video"
            height={500} src={videoUrl}
            style={{borderRadius: "10px"}}
            unoptimized
        />
    </div>,
    <div className="slide" key="slide-2">
        <Image
            width={1000} alt="Video"
            height={500} src={videoUrl}
            style={{borderRadius: "10px"}}
            unoptimized
        />
    </div>,
    <div className="slide" key="slide-3">
        <Image
            width={1000} alt="Video"
            height={500} src={videoUrl}
            style={{borderRadius: "10px"}}
            unoptimized
        />
    </div>
    ];

  return (
    <div className="content-container">
      {isLiveStreamAvailable ? (
        <div className="live-stream-embed">
          {/* Embed your live stream player here */}
          <iframe 
            src={LIVE_STREAM_EMBED_URL}
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <EmblaCarousel slides={slides} />
      )}
    </div>
  );
}

export default ContentDisplay;