import { NextResponse, NextRequest } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-08-27.basil',
  appInfo: { // For sample support and debugging, not required for production:
    name: "stripe-samples/accept-a-payment/prebuilt-checkout-page",
    version: "0.0.1",
    url: process.env.STRIPE_URL as string 
  }
});

// Fetch the Checkout Session to display the JSON result on the success page
export async function POST(req: NextRequest){
  // Read sessionId from the URL query string
  const sessionIdRaw = req.nextUrl?.searchParams?.get('sessionId');

  if (!sessionIdRaw) {
    return NextResponse.json({ error: 'Missing or invalid sessionId' }, { status: 400 });
  }

  const session = await stripe.checkout.sessions.retrieve(sessionIdRaw);
  return NextResponse.json(session);
}