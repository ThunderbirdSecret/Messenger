module.exports = {
    content: [
        "./src/**/**/**.{html,js,ts,tsx,hbs}",
        "./node_modules/@my-company/tailwind-components/**/*.js"
    ],
    theme: {
        container: {
            center: true,
        },
        linearGradientColors: {
            "button-color": ["#339DFF", "#112E79"],
            'window-color': ["#2A2A2A", "#3E424F"],
        },
        extend: {
            colors: {
                "blue": "#06b6d4",
                "graphite": "#313131",
                "select-graphite": "#5B5B5B",
                "hr-color": "#52525b",
                "light-select": "#999999",
                "red": "#ff0000"
            },
            gradientFill: {
                "button-gradient": "bg-gradient-to-b from-cyan-400 to-blue-700",
                "black-zinc": "gradient-to-b from-black to-[#3E424F]",
            },
        },
    },
    plugins: [
        require("tailwindcss-gradients"),
    ],
}
