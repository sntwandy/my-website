const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        purgecss({
            content: ['./**/index.html']
        }),
    ]
}