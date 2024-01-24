/** @type {import("next").NextConfig} */
module.exports = {
    basePath: "/first-Next.js-project",
    assetPrefix: "/first-Next.js-project",
    images: {
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
