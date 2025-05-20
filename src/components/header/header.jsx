'use client'
import { useState } from 'react';
import './header.css';
import Link from 'next/link';
import Image from 'next/image';
import { TfiMenu } from "react-icons/tfi";
import MobileMenu from './mobileMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/events', label: 'Events' },
    { href: '/vote', label: 'Vote' },
  ];

  const renderNavItems = () => (
    <ul className='hidden sm:flex'>
      {navItems.map(({ href, label }) => (
        <li key={href}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header>
      <h1>
        <Link href="/">
          <Image src="/Buzz.png" alt="logo" height={100} width={100} />
        </Link>
      </h1>
      <nav>
        <div 
          className="text-sm bg-slate-700 p-2 rounded-md shadow-md text-lg sm:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <TfiMenu className="w-6 h-6" />
        </div>
        {renderNavItems()}
      </nav>
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}
