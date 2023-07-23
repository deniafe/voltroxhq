import Head from 'next/head'

import MainLayout from '@/components/global/MainLayout';
import { Interface } from '@/components/investors/Interface'; 

export default function Investors() {

  return (
    <>
      <Head>
        <title>Voltrox | Investors</title>
        <meta name="description" content="Voltrox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/voltrox.png" />
      </Head>
      <MainLayout>
        <Interface />
      </MainLayout>
    </>
  )
}
