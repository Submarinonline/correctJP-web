module.exports = {
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.js',
        './nuxt.config.js'
    ],
    darkMode: 'class',
    theme: {
        // fontFamily: {
        //     sans: ['Noto Sans JP', 'sans-serif']
        // },
        extend: {
            colors: {
                'paper-gray': '#f8f8f8',
                'night-gray': '#343a40'
            },
            inset: {
                '1/2': '50%'
            }
        }
    }
}
