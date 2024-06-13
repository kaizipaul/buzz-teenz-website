"use client"
import { useState, useEffect } from 'react';
import fetchBlogPosts from '@/app/helpers/fetchBlogs';
import { formatFullDateTime } from '@/app/helpers/convertDate';
import { Separator } from "@/components/ui/separator"
import Image from 'next/image';
import { barlow_condensed } from '@/app/fonts';

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
          <div key={post.id} className='flex flex-col items-start sm:gap-4'>
            <div className='-z-10 w-[100%]'>
              <Image 
              src={`${post.attributes.thumbnail.data.attributes.url}`}
              alt='cover-image'
              width={800}
              height={500}
              className='w-[100%] h-[500px] object-cover rounded-[20px]'
              quality={100}
              />
            </div>
            <div className='flex flex-col gap-2 relative top-[-55px] p-2'>
            <h1 className={barlow_condensed.className}>
              {post.attributes.title}
            </h1>
            <div className="inline-flex items-center gap-4">
              <Image
              src={`${post.attributes.authors.data[0].attributes.avatar.data.attributes.url}`}
              alt='avatar'
              width={50}
              height={50}
              className='object-cover w-[50px] h-[50px] rounded-full ring-offset-2 ring ring-[#1789FC]'
              />
              <p>{post.attributes.authors.data[0].attributes.name}</p>
            </div>
            <div className='inline-flex gap-2 items-baseline gap-4'>
              <p>{formatFullDateTime(post.attributes.createdAt)}</p>
              <p className='bg-black px-4 py-2 text-white rounded-full text-sm'>{post.attributes.tags}</p>
            </div>
            <div>
            <h3 className='text-xl font-bold'>Summary</h3>
            <p className='text-left italic'>{post.attributes.summary}</p>
            </div>
            <Separator className='mt-4' />
            </div>
            <p className='text-left p-2'>{post.attributes.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

// export async function generateStaticParams() {
//   const blog = await fetchBlogPosts().then((res) => res.json())
 
//   return blog.map((post) => ({
//     slug: post.attributes.slug,
//   }))
// }
