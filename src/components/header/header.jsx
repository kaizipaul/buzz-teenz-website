import './header.css';
import Link from 'next/link';

export default function Header () {
  return (
   <header>
    <h1>
     <Link href="/">
     [PLACEHOLDER LOGO]
     </Link>
     </h1>
    <nav>
     <ul>
      <li>
       <Link href="/about">
       About
       </Link>
      </li>
      <li>
       <Link href="/blog">
        Blog
       </Link>
      </li>
      <li>
        <Link href="/events">
        Events
        </Link>
      </li>
      <li>
       <Link href="/vote">
        Vote
       </Link>
      </li>
     </ul>
    </nav>
   </header>
  )
}