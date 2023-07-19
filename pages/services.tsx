import Head from 'next/head'

import MainLayout from '@/components/global/MainLayout';
import { Interface } from '@/components/services/Interface'; 

export default function Services() {

  return (
    <>
      <Head>
        <title>Voltrox | Services</title>
        <meta name="description" content="Voltrox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.jpeg" />
      </Head>
      <MainLayout>
        <Interface />
      </MainLayout>
    </>
  )
}
