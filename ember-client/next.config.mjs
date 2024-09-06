/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "http://emberdevelopment.eba-yrmbfm2p.eu-west-2.elasticbeanstalk.com/api/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hnjusjswsficvzglhkfw.supabase.co",
        pathname: "/*",
        port: "",
      },
      {
        protocol: "https",
        hostname: "hnjusjswsficvzglhkfw.supabase.co",
        pathname: "/storage/v1/object/public/ember/*",
        port: "",
      },
      // {
      //   protocol: "https",
      //   hostname: "ember-kasubonteng.s3.eu-west-2.amazonaws.com",
      //   pathname: "/*",
      //   port: "",
      // },
    ],
  },
};

export default nextConfig;
