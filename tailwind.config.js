/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'hero-image':
                    "url('./src/assets/images/Into_the_Jaws_of_Death.jpg')",
            },
        },
    },
    plugins: [],
};
