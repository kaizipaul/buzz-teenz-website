import { supabase } from '@/lib/supabaseClient'

/**
 * Creates a new blog post in the database
 * @param {Object} postData - The blog post data
 * @returns {Promise<Object>} - The created blog post
 */
export async function createBlogPost(postData) {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([
        {
          title: postData.title,
          slug: postData.slug,
          authors: postData.authors,
          summary: postData.summary,
          body: postData.body,
          image_url: postData.imageUrl,
          is_featured: postData.isFeatured,
          created_at: new Date().toISOString(),
        }
      ])
      .select()

    if (error) {
      throw error
    }

    return { data, error: null }
  } catch (error) {
    console.error('Error creating blog post:', error)
    return { data: null, error }
  }
}

/**
 * Fetches blog posts from the database
 * @param {Object} options - Options for fetching blog posts
 * @returns {Promise<Object>} - The fetched blog posts
 */
export async function getBlogPosts({ featured = false, limit = 10, offset = 0 } = {}) {
  try {
    let query = supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)
    
    if (featured) {
      query = query.eq('is_featured', true)
    }
    
    const { data, error } = await query
    
    if (error) {
      throw error
    }
    
    return { data, error: null }
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return { data: null, error }
  }
} 