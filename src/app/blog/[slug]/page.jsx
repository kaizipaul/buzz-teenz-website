// app/blog/[id]/page.js
"use client"
import { useState, useEffect } from 'react';
import fetchBlogPosts from '@/app/helpers/fetchBlogs';
import Image from 'next/image';

export default function BlogPost(props) {
  const [blog, setBlog] = useState([]);

 useEffect (() => {
  const getData = async () => {
    try {
      const getBlog = await fetchBlogPosts(`filters[slug][$eq]=${props.params.slug}`);
      setBlog(getBlog);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  getData();
 }, [props.params.slug])

  return (
    <div>
      <section className='text-left flex flex-col gap-8'>
        {blog.map(post => (
          <div key={post.id} className='flex flex-col gap-4 items-start'>
            <div>
              <Image src={`http://localhost:1337${post.attributes.thumbnail.data.attributes.url}`} alt='cover-image' width={300} height={150} />
            </div>
            <h1>
              {post.attributes.title}
            </h1>
            <div className='inline-flex gap-2 items-baseline'>
              <p>{post.attributes.authors.data[0].attributes.name}</p>
              <p>{post.attributes.tags}</p>
              </div>
            <p className='italic'>{post.attributes.summary}</p>
            <p className='text-left'>{post.attributes.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
