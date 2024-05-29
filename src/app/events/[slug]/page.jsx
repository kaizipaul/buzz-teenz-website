// app/blog/[id]/page.js
"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import fetchEvents from '@/app/helpers/fetchEvents';

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
    <div>
      <section className='text-left flex flex-col gap-8'>
        {event.map(item => (
          <>
          <div className='flex flex-col gap-4 items-start'>
          <div>
              <Image src={`http://localhost:1337${post.attributes.thumbnail.data.attributes.url}`} alt='cover-image' width={300} height={150} />
            </div>
            <h1>{item.attributes.title}</h1>
            <div className='inline-flex gap-2 items-baseline'>
              <p>{item.attributes.authors.data[0].attributes.name}</p>
            </div>
            <p className='italic'>Summary</p>
          </div><p className="text-left">
              {item.attributes.body}
            </p>
            </>
        ))}
      </section>
    </div>
  );
}
