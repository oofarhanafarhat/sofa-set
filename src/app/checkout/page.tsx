'use client';

import dynamic from 'next/dynamic';

// Dynamically import the inner component with SSR disabled
const CheckoutPage = dynamic(() => import('./checkoutPageInner'), { ssr: false });

export default CheckoutPage;
