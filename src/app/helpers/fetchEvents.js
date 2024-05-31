export default async function fetchEvents(params) {
 const request = await fetch(`http://localhost:1337/api/events?populate[coverimage][fields][0]=name&populate[coverimage][fields][1]=url&populate[authors][fields][0]=name&populate[authors][fields][1]=email&populate[authors][populate][0]=avatar&${params}`);
 const response = await request.json();
 // if (!response.ok) {
 //   throw new Error('Failed to fetch blog posts');
 // }
 return response.data;
}
