import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

/**
 * @typedef {Object} MainStoryProps
 * @property {string} thumbnail - URL of the story thumbnail
 * @property {string} title - Title of the story
 * @property {string} author - Name of the author
 * @property {string} date - Publication date
 * @property {string} avatar - URL of the author's avatar
 * @property {string} tag - Story tag or category
 * @property {string} link - URL to the full story
 */

/**
 * @param {MainStoryProps} props
 */
const MainStory = ({ thumbnail, title, author, date, avatar, tag, link }) => {
  return (
    <Link href={link} className="block">
      <div className="relative w-full h-[100%] overflow-hidden rounded-lg">
        <Image
          src={thumbnail}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="text-sm font-semibold mb-2">{tag}</p>
          <h2 className="text-2xl font-bold mb-2">
            {title}
          </h2>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={avatar} />
            </Avatar>
            <div className="flex items-start flex-col">
              <p className="text-sm font-semibold">{author}</p>
              <p className="text-xs">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MainStory;
