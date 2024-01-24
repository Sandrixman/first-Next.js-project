/** @type {import("next").NextConfig} */
module.exports = {
    images: {
        output: "./out",

        remotePatterns: [
            {
                protocol: "https",
                hostname: "nodejs-homework-rest-api-7or0.onrender.com",
            },
        ],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ["@svgr/webpack"],
        });
        return config;
    },
};
