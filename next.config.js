const withTM = require('next-transpile-modules')(['ky']);
const withImages = require('next-images');

module.exports = withTM(
    withImages({
        env: {
            API_URL: 'http://45.147.177.198:3001',
        },
        eslint: {
            // Warning: Dangerously allow production builds to successfully complete even if
            // your project has ESLint errors.
            ignoreDuringBuilds: true,
        },
    })
)