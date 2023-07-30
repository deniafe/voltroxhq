import Head from 'next/head'
import { Suspense, useState } from 'react';

import { LoadingScreen } from '@/components/home/LoadingScreen';
import MainLayout from '@/components/global/MainLayout';
import { Interface } from '@/components/home/Interface';

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
      <Suspense fallback={<LoadingScreen/>}>
        <MainLayout>
          <Interface />
        </MainLayout>
      </Suspense>
    </>
  )
}