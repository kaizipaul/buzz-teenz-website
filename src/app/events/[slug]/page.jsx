// app/blog/[id]/page.js
"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { formatFullDateTime } from '@/app/helpers/convertDate';
import { Separator } from "@/components/ui/separator";
import fetchEvents from '@/app/helpers/fetchEvents';
import { barlow_condensed } from '@/app/fonts';

export default function BlogPost(props) {
  const [event, setEvent] = useState([]);

 useEffect (() => {
  const getData = async () => {
    try {
      const getEvent = await fetchEvents(`filters[slug][$eq]=${props.params.slug}`);
      setEvent(getEvent);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  getData();
 }, [])


  return (
    <>
      <section className='text-left flex flex-col gap-8'>
        {event.map(item => (
          <div key={item.id}>
          <div className='flex flex-col gap-4 items-start'>
          <div className='-z-10 w-[100%]'>
              <Image
              src={`${item.attributes.coverimage.data.attributes.url}`} 
              alt='cover-image'
              width={800}
              height={500}
              className='w-[100%] h-[500px] object-cover rounded-[20px]'
              quality={100}
              />
            </div>
            <div className='flex flex-col gap-2 relative top-[-55px] p-2'>
            <h1 className={barlow_condensed.className}>
              {item.attributes.title}
            </h1>
            <div className='inline-flex gap-2 items-center gap-4'>
            <Image
              src={`${item.attributes.authors.data[0].attributes.avatar.data.attributes.url}`}
              alt='avatar'
              width={50}
              height={50}
              className='object-cover w-[50px] h-[50px] rounded-full ring-offset-2 ring ring-[#1789FC]'
              />
              <p>{item.attributes.authors.data[0].attributes.name}</p>
            </div>
            <div className='inline-flex text-left gap-2 items-baseline gap-4'>
              <p>{formatFullDateTime(item.attributes.createdAt)}</p>
              <p className='bg-black px-4 py-2 text-white rounded-full text-sm'>{item.attributes.tags}</p>
            </div>
          </div>
          <Separator className='my-4' />
          </div>
          <p className="text-left">
              {item.attributes.body}
            </p>
            </div>
        ))}
      </section>
    </>
  );
}
