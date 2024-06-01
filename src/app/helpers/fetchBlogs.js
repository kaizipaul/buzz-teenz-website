/**
 * Asynchronously fetches blog posts from a specified API endpoint.
 * @param {string} params - Additional parameters to be included in the API request URL.
 * @returns {Promise} A Promise that resolves to the data of the fetched blog posts.
 */
const apiURL = 'https://smart-basket-1c7bb83d81.strapiapp.com';

export default async function fetchBlogPosts(params) {
 const request = await fetch(`${apiURL}/api/articles?populate[thumbnail][fields][0]=name&populate[thumbnail][fields][1]=url&populate[authors][fields][0]=name&populate[authors][fields][1]=email&populate[authors][populate][0]=avatar&${params}`);
 const response = await request.json();
 // if (!response.ok) {
 //   throw new Error('Failed to fetch blog posts');
 // }
 return response.data;
}
