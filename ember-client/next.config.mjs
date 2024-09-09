/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    if (process.env.NODE_ENV === 'production') {
      return [
        {
          source: "/api/:path*",
          destination:
            "http://emberdevelopment.eba-yrmbfm2p.eu-west-2.elasticbeanstalk.com/api/:path*",
        },
      ];
    } else {
      return [
        {
          source: "/api/:path*",
          destination: "http://localhost:5081/api/:path*",
        },
      ];
    }
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
