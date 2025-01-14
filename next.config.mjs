/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
    images: {
        domains: ['assets.aceternity.com', 'images.unsplash.com', 'api.microlink.io',"aceternity.com"],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '**',
          },
        ],
      },
      env: {
        NEXT_URL_SMTP_HOST: process.env.NEXT_URL_SMTP_HOST,
        NEXT_URL_SMTP_PORT: process.env.NEXT_URL_SMTP_PORT,
        NEXT_URL_SMTP_SECURE: process.env.NEXT_URL_SMTP_SECURE,
        NEXT_URL_SMTP_USER: process.env.NEXT_URL_SMTP_USER,
        NEXT_URL_SMTP_PASS: process.env.NEXT_URL_SMTP_PASS,
        NEXT_URL_RECEIVER_EMAIL: process.env.NEXT_URL_RECEIVER_EMAIL,
        NEXT_MONGODB_URI: process.env.NEXT_MONGODB_URI,
        NEXT_BASE_URL: process.env.NEXT_BASE_URL,
        NEXT_CLOUDINARY_CLOUD_NAME: process.env.NEXT_CLOUDINARY_CLOUD_NAME,
        NEXT_CLOUDINARY_API_KEY: process.env.NEXT_CLOUDINARY_API_KEY,
        NEXT_CLOUDINARY_API_SECRET: process.env.NEXT_CLOUDINARY_API_SECRET,
        NEXT_NEXT_NODE_ENV: process.env.NEXT_NEXT_NODE_ENV,
        NEXT_TELEGRAM_BOT_TOKEN: process.env.NEXT_TELEGRAM_BOT_TOKEN,
        NEXT_TELEGRAM_CHAT_ID: process.env.NEXT_TELEGRAM_CHAT_ID,
        NEXT_IPSTACK_KEY: process.env.NEXT_IPSTACK_KEY,
        NEXT_IPINFO_KEY: process.env.NEXT_IPINFO_KEY,
      }
};

export default nextConfig;
