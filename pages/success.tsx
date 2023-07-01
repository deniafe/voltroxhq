import Head from 'next/head'
import { Suspense, useState } from 'react';
import { useRouter } from 'next/router';


import MainLayout from '@/components/global/MainLayout';
import Link from 'next/link';

export default function Home() {
  const [start, setStart] = useState(false);

  const router = useRouter();

  const handleNavigation = () => {
    router.push('/');
  }  

  return (
    <>
      <Head>
        <title>Voltrox | Message Sent</title>
        <meta name="description" content="Message Sent" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.jpeg" />
      </Head>
      {/* <MainLayout> */}
      <div
      className='bg-page-gradient'
      style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}
    >
      <div className="text-center">
        <div className="text-lg">
          <p>Your message has been sent successfully</p>
          <button onClick={handleNavigation} className="rounded-full transition duration-150 ease-in-out px-8 py-2 mt-[4rem] bg-primary-gradient hover:bg-reverse-gradient text-white text-sm inline-block uppercase">
            Back To Home Page</button>
        </div>
          
      </div>
    </div>
      {/* </MainLayout> */}
    </>
  )
}