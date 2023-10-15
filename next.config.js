module.exports = {
    webpack(config) {
        config.module.rules.push({
            use: "@svgr/webpack",
            test: /\.svg$/i,
        });

        return config;
    },
};
