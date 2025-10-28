// app/api/livestatus/route.js
import { NextResponse } from 'next/server';

const YOUR_STREAM_API_ENDPOINT = 'https://api.example.com/stream/status'; // Replace with your actual stream status API endpoint
export async function GET() {
  let isLive = false;

  // Example: Check if a stream from a custom service is active
  // Replace this with your actual logic to fetch the live status
  try {
    const streamInfo = await fetch(YOUR_STREAM_API_ENDPOINT);
    const data = await streamInfo.json();

    if (data.status === 'live') {
      isLive = true;
    }

    return NextResponse.json({ isLive });
  } catch (error) {
    console.error('Error fetching stream status:', error);
    return NextResponse.json({ isLive: false });
  }
}
