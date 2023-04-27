/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb+srv://onifkay:Mongodbpassword@next-heroes.g626rap.mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
