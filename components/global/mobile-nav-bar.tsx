"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { Container } from "./container";
import { HamburgerIcon } from "./icons/hamburger";
import Image from 'next/image';
import classNames from "classnames";
import { useRouter } from 'next/router';

export const MobileNavBar = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);


  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Work With Us', href: '/work' },
    { label: 'Career', href: '/career' },
    { label: 'Investors', href: '/investors' },
  ];

  return (
    <header className={classNames("fixed top-0 left-0 z-10 w-full border-b border-transparent-white backdrop-blur-[12px] md:hidden",
      hamburgerMenuIsOpen ? "h-screen transition-[visibility] delay-500" : ''
    )}>
    <Container className="flex px-4 h-navigation-height">
      <Link className="flex items-center text-md" href="/">
        <Image src="/logo.png" alt="Logo" height={14} width={70} />
      </Link>
  
      <div
        className={classNames(
          "transition-[visibility] md:visible",
          hamburgerMenuIsOpen ? "visible" : "delay-500 invisible"
        )}
      >
        <nav
          id="navbar"
          className={classNames(
            "fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden",
            hamburgerMenuIsOpen
              ? "translate-x-0 opacity-100 bg-background bg-opacity-10 backdrop-filter backdrop-blur-[32px]"
              : "translate-x-[-100vw] opacity-0"
          )}
        >
          <ul className="flex flex-col justify-center rounded pl-4">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`mr-8 px-4 py-2 text-sm h-full pt-6 pb-6 font-light text-white cursor-pointer transition duration-300 ${
                  router.asPath === link.href ? 'border-b-2 border-white' : ''
                }`}
                style={{ fontFamily: 'Inconsolata' }}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <button
        className="md:hidden ml-auto flex h-full items-center"
        onClick={() => setHamburgerMenuIsOpen((open) => !open)}
      >
        <span className="sr-only">Toggle menu</span>
        <HamburgerIcon />
      </button>
    </Container>
  </header>
  
  );
};
