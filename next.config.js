const nextRuntimeDotenv = require('next-runtime-dotenv');

const withConfig = nextRuntimeDotenv({ public: ['API_URL'] });

const nextConfig = {
    publicRuntimeConfig: {
        API_URL: process.env.API_URL
    }
};

module.exports = withConfig(nextConfig);
