/** @type {import("next").NextConfig} */
module.exports = {
    basePath: "/first-Next.js-project",
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ["@svgr/webpack"],
        });
        return config;
    },
};
