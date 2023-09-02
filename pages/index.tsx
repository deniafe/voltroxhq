import Head from 'next/head';
import React, { Suspense } from 'react';

import { LoadingScreen } from '@/components/home/LoadingScreen';
import MainLayout from '@/components/global/MainLayout';
import Interface from '@/components/home/Interface'

export default function Home() {

  return (
    <>
      <Head>
        <title>Voltrox</title>
        <meta name="description" content="Coding the future. Empowering businesses with innovative solutions" />
        <meta name="twitter:title" content="Voltrox" />
        <meta name="twitter:description" content="Coding the future. Empowering businesses with innovative solutions" />
        <meta name="twitter:image" content="https://www.voltroxhq.com/img/5.jpg" />
        <meta property="og:image" content="https://www.voltroxhq.com/img/5.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/voltrox.png" />
      </Head>
      <Suspense fallback={<LoadingScreen />}>
        <MainLayout>
          <Interface />
        </MainLayout>
      </Suspense>
    </>
  );
}
