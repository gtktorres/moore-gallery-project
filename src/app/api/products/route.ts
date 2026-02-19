// app/api/upload/route.ts or app/api/process-bytes/route.ts
import { NextRequest, NextResponse } from 'next/server';

export default async function GET(req: NextRequest) {
  try {
    // Read products from local data file as the default data source.
    // If you have a real database, replace this logic with your DB client.
    
    const products = await fetch(`https://localhost:7093/api/Buyers/ProductsGet`);
    
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}