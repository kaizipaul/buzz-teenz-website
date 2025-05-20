import { Button } from "@/components/ui/button";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";

export default function HeroSection({ barlow_condensed }) {
  return (
    <section className="hero-section flex">
      <div className="hero-card flex">
        <h1 className={barlow_condensed.className}>
          CREATING EXCITING <br /> EXPERIENCES
        </h1>
        <p className="w-[90%] sm:w-[50%]">
          Lorem ipsum dolor sit amet stet. Ea consectetuer ipsum nonumy rebum
          autem consequat sit erat gubergren facilisis sit nibh magna.
        </p>
        <Button className="bg-pink-600 mt-10">
          <Link href="/blog">Read Our Blog</Link>
          <BiLinkExternal className="ml-2" />
        </Button>
      </div>
    </section>
  );
}
