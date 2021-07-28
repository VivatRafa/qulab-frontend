const withTM = require('next-transpile-modules')(['ky']);
const withImages = require('next-images');

module.exports = withTM(
    withImages({
        env: {
            API_URL: 'http://localhost:3000',
        },
    })
)