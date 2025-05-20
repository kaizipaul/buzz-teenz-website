"use client";
import { useEffect, useState, useCallback } from "react";
import AllPosts from "@/components/blogcards/allposts";
import MainStory from "@/components/blogcards/mainstory";
import { formatDate } from "../helpers/convertDate";
import { barlow_condensed } from "../fonts";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from 'react-hot-toast';
import { supabase } from '@/lib/supabaseClient';

const POSTS_PER_PAGE = 4;

// Skeleton loader for main story cards
const MainStorySkeleton = () => (
  <div className="animate-pulse bg-gray-200 h-full w-full rounded-lg"></div>
);

// Skeleton loader for smaller blog post cards
const BlogPostSkeleton = () => (
  <div className="animate-pulse bg-gray-200 h-64 w-full rounded-lg"></div>
);

const Blog = () => {
  const [blogData, setBlogData] = useState({ featured: [], nonFeatured: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch blog posts from Supabase
  useEffect(() => {
    const fetchBlogPosts = async () => {
      setIsLoading(true);
      try {
        // Fetch featured posts
        const { data: featuredPosts, error: featuredError } = await supabase
          .from('blog_posts')
          .select(`
            *,
            authors:author_id (
              name,
              avatar_url
            )
          `)
          .eq('is_featured', true)
          .order('created_at', { ascending: false });

        if (featuredError) throw featuredError;

        // Fetch non-featured posts
        const { data: nonFeaturedPosts, error: nonFeaturedError } = await supabase
          .from('blog_posts')
          .select(`
            *,
            authors:author_id (
              name,
              avatar_url
            )
          `)
          .eq('is_featured', false)
          .order('created_at', { ascending: false });

        if (nonFeaturedError) throw nonFeaturedError;

        setBlogData({
          featured: featuredPosts || [],
          nonFeatured: nonFeaturedPosts || []
        });
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        toast.error('Failed to fetch blog posts. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const renderBlogPost = useCallback((blog, isFeatured = false) => {
    const Component = isFeatured ? MainStory : AllPosts;
    return (
      <Component
        key={blog.id}
        thumbnail={blog.image_url}
        title={blog.title}
        author={blog.authors.name}
        date={formatDate(blog.created_at)}
        avatar={blog.authors.avatar_url}
        tag={blog.tags}
        link={`blog/${blog.slug}`}
        summary={blog.summary}
      />
    );
  }, []);

  const { featured, nonFeatured } = blogData;
  const pageCount = Math.ceil(nonFeatured.length / POSTS_PER_PAGE);
  const paginatedBlogs = nonFeatured.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section className="flex flex-col gap-4 sm:gap-8 items-center">
        <h1 className={barlow_condensed.className}>READ FROM OUR TEAM</h1>
        <p>Catch up with the latest news and updates from our team.</p>
      </section>
      <section>
        <div className="grid grid-rows-4 sm:grid-rows-2 grid-flow-col gap-2 h-[800px] text-left">
          <div className="row-span-2">
            {isLoading ? <MainStorySkeleton /> : featured.map(blog => renderBlogPost(blog, true))}
          </div>
          {isLoading 
            ? Array(2).fill().map((_, index) => <MainStorySkeleton key={index} />)
            : nonFeatured.slice(0, 2).map(blog => renderBlogPost(blog, true))}
        </div>
      </section>
      <section className="flex flex-col gap-8">
        <h2>All Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
          {isLoading
            ? Array(POSTS_PER_PAGE).fill().map((_, index) => <BlogPostSkeleton key={index} />)
            : paginatedBlogs.map(blog => renderBlogPost(blog))}
        </div>
        {!isLoading && (
          <PaginationControls
            currentPage={currentPage}
            pageCount={pageCount}
            setCurrentPage={setCurrentPage}
          />
        )}
      </section>
    </>
  );
};

const PaginationControls = ({ currentPage, pageCount, setCurrentPage }) => (
  <div className="flex justify-center gap-2 mt-4">
    <Button
      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
    >
      Previous
    </Button>
    <span className="self-center">
      Page {currentPage} of {pageCount}
    </span>
    <Button
      onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
      disabled={currentPage === pageCount}
    >
      Next
    </Button>
  </div>
);

export default Blog;

// TO DO:
// 1. render all blogposts here
//
