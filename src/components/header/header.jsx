import './header.css';
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function Header () {
  return (
   <header>
    <h1>
     <Link href="/">
     [buzz teenz]
     </Link>
     </h1>
    <nav>
      <div className='bg-[#221F2D]/90 p-2 rounded-sm shadow-md text-lg sm:hidden'>
      <Sheet>
  <SheetTrigger asChild>
  <RxHamburgerMenu />
  </SheetTrigger>
  <SheetContent side={'top'} className='bg-[#221F2D]/90 dark backdrop-blur-md h-[90%] p-10'>
    <SheetHeader>
      <SheetTitle className='text-2xl'>[buzz teenz]</SheetTitle>
      <SheetDescription className='p-10'>
        <ul className='flex flex-col gap-4 text-xl'>
          <li>
            <SheetTrigger asChild>
            <Link href="/">
              Home
            </Link>
            </SheetTrigger>
          </li>
          <li>
            <SheetTrigger asChild>
            <Link href="/about">
            About
       </Link>
            </SheetTrigger>
          </li>
          <li>
            <SheetTrigger asChild>
            <Link href="/blog">
            Blog
       </Link>
            </SheetTrigger>
          </li>
          <li>
            <SheetTrigger asChild>
            <Link href="/events">
        Events
        </Link>
            </SheetTrigger>
          </li>
          <li>
            Vote
          </li>
        </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
      </div>
     <ul className='hidden sm:flex'>
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