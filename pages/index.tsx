import Head from 'next/head';
import React, { Suspense, useState } from 'react';

import { LoadingScreen } from '@/components/home/LoadingScreen';
import MainLayout from '@/components/global/MainLayout';

// Use React.lazy to create a lazy import for Interface
const LazyInterface = React.lazy(() => import('@/components/home/Interface'));

export default function Home() {
  const [start, setStart] = useState(false);

  return (
    <>
      <Head>
        <title>Voltrox</title>
        <meta name="description" content="Voltrox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/voltrox.png" />
      </Head>
      <Suspense fallback={<LoadingScreen />}>
        <MainLayout>
          {/* Use the lazy component */}
          <LazyInterface />
        </MainLayout>
      </Suspense>
    </>
  );
}
