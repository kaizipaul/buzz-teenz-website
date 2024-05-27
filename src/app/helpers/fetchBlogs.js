/**
 * Asynchronously fetches blog posts from a specified API endpoint.
 * @param {string} params - Additional parameters to be included in the API request URL.
 * @returns {Promise} A Promise that resolves to the data of the fetched blog posts.
 */
export default async function fetchBlogPosts(params) {
 const request = await fetch(`http://localhost:1337/api/articles?populate[1]=thumbnail&populate[0]=authors&${params}`);
 const response = await request.json();
 // if (!response.ok) {
 //   throw new Error('Failed to fetch blog posts');
 // }
 return response.data;
}
