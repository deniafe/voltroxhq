import Link from "next/link";
import { Container } from "./container";
import { GithubIcon } from "./icons/github";
import Image from 'next/image';
import { TwitterIcon } from "./icons/twitter";
import { FacebookIcon } from "./icons/Facebook";
import { InstagramIcon } from "./icons/Instagram";
import { LinkedInIcon } from "./icons/LinkedIn";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Services", href: "/services" },
      // { title: "Work with us", href: "/services" },
      // { title: "Pricing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "/about" },
      // { title: "Blog", href: "#" },
      { title: "Careers", href: "/careers" },
      // { title: "Customers", href: "#" },
      { title: "Investors", href: "/investors" },
    ],
  },
  {
    title: "Resources",
    links: [
      // { title: "Community", href: "#" },
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms of service", href: "terms-of-service" },
    ],
  },
  // {
  //   title: "Developers",
  //   links: [
  //     // { title: "API", href: "#" },
  //     { title: "Careers", href: "/careers" },
  //   ],
  // },
];

export const Footer = () => (
  <footer className="mt-12 border-t border-transparent-white py-[5.6rem] pl-12 md:pl-0 text-sm">
    <Container className="flex flex-col justify-between lg:flex-row">
      <div>
        <div className="flex h-full flex-row justify-between lg:flex-col">
          <div className="flex items-center text-grey">
            <Image className="mr-4 h-3 w-12" src="/logo.png" alt="Logo" height={20} width={100} />
            {/* <Logo className="mr-4 h-4 w-4" /> - Designed worldwide */}
          </div>
          <div className="mt-auto flex space-x-4 pr-12 md:pr-0 text-grey">
            <a href="https://twitter.com/VoltroxHQ" target="_blank">
              <TwitterIcon size={18} />
            </a>
            <a href="https://facebook.com/voltroxhq" target="_blank">
              <FacebookIcon size={18} />
            </a>
            <a href="https://www.instagram.com/voltroxhq" target="_blank">
              <InstagramIcon size={18} />
            </a>
            <a href="https://github.com/VoltroxHQ" target="_blank">
              <GithubIcon size={18} />
            </a>
            <a href="https://www.linkedin.com/company/voltroxhq" target="_blank">
              <LinkedInIcon size={18} />
            </a> 
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {footerLinks.map((column) => (
          <div
            key={column.title}
            className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
          >
            <h3 className="mb-3 font-medium">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.title} className="[&_a]:last:mb-0">
                  <Link
                    className="mb-3 block text-grey transition-colors hover:text-off-white"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </footer>
);
