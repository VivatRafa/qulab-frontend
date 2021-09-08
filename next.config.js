const withTM = require('next-transpile-modules')(['ky']);
const withImages = require('next-images');

module.exports = withTM(
    withImages({
        env: {
            API_URL: 'https://qulab.club/api',
        },
        eslint: {
            // Warning: Dangerously allow production builds to successfully complete even if
            // your project has ESLint errors.
            ignoreDuringBuilds: true,
        },
    })
)