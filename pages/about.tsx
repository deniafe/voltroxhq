import Head from 'next/head'
import React, { Suspense } from 'react';

import { LoadingScreen } from '@/components/home/LoadingScreen';
import MainLayout from '@/components/global/MainLayout';
import { Interface } from '@/components/about/Interface'; 


export default function About() {
  
  return (
    <>
      <Head>
        <title>Voltrox | About Us</title>
        <meta name="description" content="Voltrox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/voltrox.png" />
      </Head>
      <Suspense fallback={<LoadingScreen />}>
        <MainLayout>
          <Interface />
        </MainLayout>
      </Suspense>
      
    </>
  )
}
