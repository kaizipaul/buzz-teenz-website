"use client"
import { useEffect, useState } from 'react';
import AllPosts from '@/components/blogcards/allposts';
import MainStory from '@/components/blogcards/mainstory';
import fetchBlogPosts from '../helpers/fetchBlogs';

const Blog = () => {
 const [blogs, setBlogs] = useState([]);

 useEffect (() => {
  fetchBlogPosts()
  .then(setBlogs)
 }, [])

  return (
    <>
   <section>
    <div className="flex flex-col gap-8 items-center">
     <h2>
      Blog.
     </h2>
     <h1>
      READ FROM OUR TEAM
     </h1>
     <p>
     Lorem ipsum dolor sit amet eos commodo labore dolores.
     </p>
    </div>
   </section>
   <section>
   <div class="grid grid-rows-2 grid-flow-col gap-2 h-[400px] text-left">
    {/* {featuredBlogs.data.map (featuredBlog => {
      <MainStory 
      key={featuredBlog.id}
      title={featuredBlog.attributes.title}
      author={featuredBlog.attributes.author}
      />
    })} */}
          <div className="row-span-2">
            <MainStory
            title={'This is Teen Buzz'}
            author={'Marcus Johnson'}
            date={'24 Dec 2024'}
            tag={'The Finals'}
            />
          </div>
          <div>
          <MainStory
            title={'This is Teen Buzz'}
            author={'Marcus Johnson'}
            date={'24 Dec 2024'}
            tag={'The Finals'}
            />
          </div>
          <div>
          <MainStory
            title={'This is Teen Buzz'}
            author={'Marcus Johnson'}
            date={'24 Dec 2024'}
            tag={'The Finals'}
            />
            </div> 
        </div>
   </section>
   <section>
    <div className='flex flex-col gap-8'>
      <h2>
        All Posts.
      </h2>
      <div className="grid grid-cols-4 grid-flow-row gap-2 h-[800px] text-left">
      {blogs.map(blog => (
       <AllPosts
       key={blog.id}
       thumbnail={`http://localhost:1337${blog.attributes.thumbnail.data.attributes.url}`}
       title={blog.attributes.title}
       author={'Marcus Johnson'}
       date={'24 Dec 2024'}
       tag={blog.attributes.tags}
       link={`blog/${blog.attributes.slug}`}
       />
      ))}
        </div>
    </div>
   </section>
   </>
  )
}

export default Blog;

// TO DO:
// 1. render all blogposts here
//