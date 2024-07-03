/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //to work around cors problem
  rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5000/:path*"
      },
    ];
  },
};

export default nextConfig
