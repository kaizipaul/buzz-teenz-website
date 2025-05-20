import { FaBookOpen } from "react-icons/fa6";
import { TbFileMusic } from "react-icons/tb";
import { IoBulb } from "react-icons/io5";

export default function AboutSection() {
  return (
    <section className="about-section flex">
      <div className="flex flex-col gap-[50px]">
        <div className="leading flex">
          <h2>About Us.</h2>
          <p className="w-[90%] sm:w-[50%]">
            Lorem ipsum dolor sit amet aliquyam takimata vel. Et ipsum ad. Erat
            sit erat et ipsum amet in rebum. Elitr vero sanctus magna id rebum
            dolores lorem option in consetetur sit duo amet diam augue.
          </p>
        </div>
        <div className="flex flex-col h-[90%] items-center w-[100%] sm:flex-row gap-4 h-[90%] h-[300px] justify-center">
          <div className="about-cards rounded-lg flex flex-col justify-evenly gap-8 px-[20px] py-[30px] w-[100%] sm:w-[30%]">
            <FaBookOpen className="text-[50px]" />
            <p className="text-left font-bold">Educate</p>
            <p className="text-left w-[90%]">
              Eum euismod eu dolore diam kasd ea et duo clita veniam dolores
            </p>
          </div>
          <div className="about-cards rounded-lg flex flex-col justify-evenly gap-8 px-[20px] py-[30px] w-[100%] sm:w-[30%]">
            <TbFileMusic className="text-[50px]" />
            <p className="text-left font-bold">Entertain</p>
            <p className="text-left w-[90%]">
              Eum euismod eu dolore diam kasd ea et duo clita veniam dolores
            </p>
          </div>
          <div className="about-cards rounded-lg flex flex-col justify-evenly gap-8 px-[20px] py-[30px] w-[100%] sm:w-[30%]">
            <IoBulb className="text-[50px]" />
            <p className="text-left font-bold">Inspire</p>
            <p className="text-left w-[90%]">
              Eum euismod eu dolore diam kasd ea et duo clita veniam dolores
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
