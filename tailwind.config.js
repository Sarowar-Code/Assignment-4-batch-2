/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            container: {
                center: true,
            },
            colors: {
                clifford: "#da373d",
            },
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
