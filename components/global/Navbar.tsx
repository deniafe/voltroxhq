import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from "classnames";

export const Navbar = () => {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    // { label: 'Work With Us', href: '/work' },
    { label: 'Careers', href: '/careers' },
    { label: 'Investors', href: '/investors' },
  ];

  const router = useRouter();
  const [isLogoVisible, setIsLogoVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      console.log('Is logo visible', isLogoVisible)
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const { top } = heroSection.getBoundingClientRect();
        setIsLogoVisible(top >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        id="navbar"
        style={isLogoVisible ? { background: 'transparent'} : { background: 'rgb(255, 255, 255, 0.07)' }}
        className={classNames(`fixed top-0 left-0 w-full flex justify-between items-center px-8 z-50 font-mono`, 
        `text-white delay-500 invisible transition-[visibility] md:visible bg-white`,
        `${isLogoVisible ? 'py-4' : 'py-0 backdrop-filter backdrop-blur-lg'} `
        )}
      >
        <div className={`text-white text-2xl font-bold text-shadow-md flex-2 w-40 transition-[visibility] ${
          isLogoVisible ? "visible" : "visible"
        }`}>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" height={20} width={100} />
          </Link>
        </div>
        <div className={classNames("flex flex-3 justify-center bg-opacity-7 rounded pl-4",
        `${isLogoVisible ? 'backdrop-filter backdrop-blur-lg' : ''} `
        )}
        style={isLogoVisible ? { background: 'rgb(255, 255, 255, 0.07)' } : { background: 'transparent'}}
        >
          {navLinks.map((link, index) => (
            <Link href={link.href}  key={index}>
              <div
                className={`mr-8 px-4 py-2 text-sm h-full pt-6 pb-6 font-light text-white cursor-pointer transition hover:bg-white hover:bg-opacity-5 duration-300 ${
                  router.asPath === link.href ? 'border-b-2 border-white' : ''
                }`}
                style={{ fontFamily: 'Inconsolata' }}
              >
                
                  {link.label}
                
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};
