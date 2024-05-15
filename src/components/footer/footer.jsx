import './footer.css';

export default function Footer () {
 const YEAR = new Date().getFullYear()
 return (
  <footer>
   <div className='flex justify-between'>
   <div>
    <p>
     LOGO
    </p>
    <p>
     © {YEAR} Buzz Group Africa.
    </p>
   </div>
   <div>
     <p>
      About
     </p>
     <p>
      Buzz Events
     </p>
     <p>
      Our Team
     </p>
   </div>
   <div>
     <p>
      Social Media
     </p>
     <p>
      Facebook
     </p>
     <p>
      Tiktok
     </p>
   </div>
   </div>
  </footer>
 )
}