// app/api/upload/route.ts or app/api/process-bytes/route.ts
import { NextRequest, NextResponse } from 'next/server';

export default async function POST(req: NextRequest) {
  try {
    // For file uploads using FormData
    if (req.headers?.get('content-type')?.includes('multipart/form-data')) {
      const formData = await req.formData();
      const file = formData.get('file') as File; // Cast to File type

      if (!file) {
        return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
      }

      const bytes = await file.arrayBuffer(); // Get ArrayBuffer from File
      // Process the byte array (e.g., save to disk, process with a library)
      console.log('Received file bytes:', bytes);

      return NextResponse.json({ message: 'File uploaded successfully' });
    }

    // For raw byte array data
    if(req) {
        const value = req.headers.get('content-type');
        if (value === 'application/octet-stream') {
        const bytes = await req.arrayBuffer(); // Get ArrayBuffer directly from request body
        // Process the byte array
        console.log('Received raw bytes:', bytes);

            return NextResponse.json({ message: 'Raw bytes received successfully' });
        }

        return NextResponse.json({ error: 'Unsupported content type' }, { status: 415 });

    } else {
        console.error("Data is undefined, cannot call .get()");
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}