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
        <link rel="icon" href="/icon.jpeg" />
      </Head>
      <Suspense fallback={<LoadingScreen started={start} onStarted={() => setStart(true)} />}>{start ? 
        (
          <MainLayout>
            <Interface />
          </MainLayout>
        ) : (
          <>
            <LoadingScreen started={start} onStarted={() => setStart(true)} />
        </>
        )
      }</Suspense>
    </>
  )
}