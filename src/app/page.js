import { Button } from "@/components/ui/button"
import { BiLinkExternal } from "react-icons/bi";
import { FaBookOpen } from "react-icons/fa6";
import { TbFileMusic } from "react-icons/tb";
import { IoBulb } from "react-icons/io5";
import MainCard from "@/components/eventcards/maincard";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <section className="hero-section flex">
      <div className="hero-card flex">
        <h1>
          CREATING EXCITING <br />
          EXPERIENCES
        </h1>
        <p className="w-[90%] sm:w-[50%]">
        Lorem ipsum dolor sit amet stet. Ea consectetuer ipsum nonumy rebum autem consequat sit erat gubergren facilisis sit nibh magna.
        </p>
        <Button className="bg-pink-600 mt-10">
          <Link href='/blog'>
            Read Our Blog
          </Link>
        <BiLinkExternal className="ml-2" />
        </Button>
      </div>
    </section>
    <section className="about-section flex">
      <div className="flex flex-col gap-[50px]">
      <div className="leading flex">
        <h2>
          About Us.
        </h2>
        <p className="w-[90%] sm:w-[50%]">
        Lorem ipsum dolor sit amet aliquyam takimata vel. Et ipsum ad. Erat sit erat et ipsum amet in rebum. Elitr vero sanctus magna id rebum dolores lorem option in consetetur sit duo amet diam augue.
        </p>
      </div>
      <div className="flex flex-col h-[90%] items-center w-[100%] sm:flex-row gap-4 h-[90%] h-[300px] justify-center">
        <div className="about-cards rounded-lg flex flex-col justify-evenly gap-8 px-[20px] py-[30px] w-[100%] sm:w-[30%]">
          <FaBookOpen className="text-[50px]" />
          <p className="text-left font-bold">Educate</p>
          <p className="text-left w-[90%]">Eum euismod eu dolore diam kasd ea et duo clita veniam dolores</p>
        </div>
        <div className="about-cards rounded-lg flex flex-col justify-evenly gap-8 px-[20px] py-[30px] w-[100%] sm:w-[30%]">
          <TbFileMusic className="text-[50px]" />
          <p className="text-left font-bold">Entertain</p>
          <p className="text-left w-[90%]">Eum euismod eu dolore diam kasd ea et duo clita veniam dolores</p>
        </div>
        <div className="about-cards rounded-lg flex flex-col justify-evenly gap-8 px-[20px] py-[30px] w-[100%] sm:w-[30%]">
          <IoBulb className="text-[50px]" />
          <p className="text-left font-bold">Inspire</p>
          <p className="text-left w-[90%]">Eum euismod eu dolore diam kasd ea et duo clita veniam dolores</p>
        </div>
      </div>
      </div>
    </section>
    <section className="events-section flex">
      <div className="flex flex-col gap-[50px] justify-center">
        <h2>
        See what we’ve been cookin up,<br />
        and what’s to come.
        </h2>
        <div class="grid grid-rows-4 h-[90%] sm:grid-rows-2 grid-flow-col gap-2 h-[400px] text-left">
          <div className="row-span-2">
          <MainCard
            tag={'The Finals'}
            title={'The Finals'}
            location={'JNICC, Dar-es-Salaam'}
            date={'19 June 2024, 1pm'}
            />
          </div>
          <div>
          <MainCard
            tag={'The Finals'}
            title={'The Finals'}
            location={'JNICC, Dar-es-Salaam'}
            date={'19 June 2024, 1pm'}
            />
          </div>
          <div>
          <MainCard
            tag={'The Finals'}
            title={'The Finals'}
            location={'JNICC, Dar-es-Salaam'}
            date={'19 June 2024, 1pm'}
            />
            </div> 
        </div>
      </div>
    </section>
    <section className="flex">
      <div className="flex flex-col gap-[50px] justify-center">
        <h2>
          Our Sponsors.
        </h2>
        <div class="grid grid-rows-4 grid-flow-col gap-2 h-[400px]">
          <div className="border-solid border-2"></div>
          <div className="border-solid border-2"></div>
          <div className="border-solid border-2"></div>
          <div className="border-solid border-2"></div>
          <div className="border-solid border-2"></div>
          <div className="border-solid border-2"></div>
          <div className="border-solid border-2"></div>
          <div className="border-solid border-2"></div>
          <div className="border-solid border-2"></div>
          <div className="border-solid border-2"></div>
          <div className="border-solid border-2"></div>
          <div className="border-solid border-2"></div>
          <div className="border-solid border-2"></div>
          <div className="border-solid border-2"></div>
          <div className="border-solid border-2"></div>
          <div className="border-solid border-2"></div>
        </div>
      </div>
    </section>
    </>
  );
}
