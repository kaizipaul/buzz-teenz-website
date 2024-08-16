/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  remotePatterns: [
    {
      protocol: 'http',
      hostname: 'localhost',
      // hostname: 'smart-basket-1c7bb83d81.media.strapiapp.com',
      // port: '',
      port: '1337',
    },
  ],
},
};

export default nextConfig;
