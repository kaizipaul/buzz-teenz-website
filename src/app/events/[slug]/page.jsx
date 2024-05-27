// app/blog/[id]/page.js
"use client"
import { useState, useEffect } from 'react';
import fetchEvents from '@/app/helpers/fetchEvents';

export default function BlogPost(props) {
  // const { slug } = params;
  // const blogs = use(() => fetchBlogPosts(`filters[slug][$eq]=${props.params.slug}`));
  const [event, setEvent] = useState([]);

 useEffect (() => {
  fetchEvents(`filters[slug][$eq]=${props.params.slug}`)
  .then(setEvent)
 }, [])

 // console.log(blog);

  // const blogPost = blogs.data;

  return (
    <div>
      <section className='text-left flex flex-col gap-8'>
      <div className='flex flex-col gap-4 items-start'>
      {/* <h1>{blog[0].attributes.title}</h1> */}
      <h1>{props.params.slug}</h1>
      <div className='inline-flex gap-2 items-baseline'>
      <p>tag</p>
      <p>10 min read</p>
      </div>
      <p className='italic'>Summary</p>
      </div>
      {/* <p className='text-left'>{blog[0].attributes.body}</p> */}
      <p className="text-left">
      Lorem ipsum dolor sit amet sea. Sed voluptua ipsum invidunt. Kasd minim sit congue facilisis no sea sed eos. Et sanctus et erat dolor clita erat minim sed elit ex dolor ipsum commodo velit sea ipsum dolor est. Sanctus eum justo et justo tincidunt augue eirmod. Amet sadipscing soluta ut voluptua sit facilisi dolor consectetuer est erat lorem sit augue. Sadipscing dolor erat iriure stet dolore nibh tempor. Consetetur sanctus voluptua elitr accusam tincidunt iriure gubergren ullamcorper stet quis. Ipsum ea kasd nobis iriure vulputate vel duis diam ipsum dolore et. Et dolore option labore et ea luptatum magna. Et ipsum vero rebum stet kasd illum iriure dolore dolores ut tempor erat et sit sed dolor vel et. Dolore erat suscipit consetetur dolore luptatum nulla sadipscing consequat. Nihil stet rebum duo justo sea tincidunt aliquyam at velit dolore dolore lobortis. Ipsum iriure ad euismod stet vulputate vero justo wisi invidunt ipsum amet iriure nulla. Rebum vulputate assum erat elitr nonumy et takimata kasd sanctus. Aliquam accusam et delenit dolore.
      </p>
      </section>
      
    </div>
  );
}
