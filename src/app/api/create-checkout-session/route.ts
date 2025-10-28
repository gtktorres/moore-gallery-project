import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { redirect } from 'next/navigation';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-08-27.basil',
  appInfo: { // For sample support and debugging, not required for production:
    name: "stripe-samples/accept-a-payment/prebuilt-checkout-page",
    version: "0.0.1",
    url: "https://github.com/stripe-samples"
  }
});

export async function POST() {
  const domainURL = process.env.DOMAIN;

  // Create new Checkout Session for the order
  // Other optional params include:
  // For full details see https://stripe.com/docs/api/checkout/sessions/create
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{
      price: process.env.PRICE,
      quantity: 1,
    }],
    // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
    success_url: `${domainURL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domainURL}/canceled`,
    // automatic_tax: { enabled: true }
  });

  console.log(NextResponse.json(session.url, { status: 200, statusText: 'checkout session created' }));
  redirect(session.url!);
};