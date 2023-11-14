/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'http://localhost:3000', // Your website URL (can be fetched from environment variables)
    generateRobotsTxt: true, // Create a robots.txt file
    generateIndexSitemap: false,
  };
  