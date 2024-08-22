/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ember-kasubonteng.s3.eu-west-2.amazonaws.com",
        pathname: "/*",
        port: "",
      },
    ],
  },
};

export default nextConfig;
