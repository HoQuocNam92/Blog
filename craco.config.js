const path = require('path');
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@navbar': path.resolve(__dirname, 'src/Navbar'),
            '@image': path.resolve(__dirname, 'src/assets/images'),
        },
    },
};
