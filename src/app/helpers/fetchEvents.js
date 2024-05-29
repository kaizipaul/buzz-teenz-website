export default async function fetchEvents(params) {
 const request = await fetch(`http://localhost:1337/api/events?populate[1]=coverimage&populate[0]=authors&${params}`);
 const response = await request.json();
 // if (!response.ok) {
 //   throw new Error('Failed to fetch blog posts');
 // }
 return response.data;
}
