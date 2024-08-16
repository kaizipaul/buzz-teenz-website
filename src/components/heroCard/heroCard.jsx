import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';
import styles from './HeroCard.module.css'; // Assuming you have CSS modules setup

const HeroCard = ({ barlowCondensed }) => {
  return (
    <div className="hero-card flex">
      <h1 className={barlowCondensed.className}>
        CREATING EXCITING <br />
        EXPERIENCES
      </h1>
      <p className="w-[90%] sm:w-[50%]">
        Lorem ipsum dolor sit amet stet. Ea consectetuer ipsum nonumy rebum autem consequat sit erat gubergren facilisis sit nibh magna.
      </p>
      <button className="bg-pink-600 mt-10">
        <Link href='/blog'>
          <a className="flex items-center">
            Read Our Blog
            <BiLinkExternal className="ml-2" />
          </a>
        </Link>
      </button>
    </div>
  );
};

export default HeroCard;
