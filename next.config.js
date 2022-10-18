module.exports = {
  images: {
    domains: ['zil-landing-resources.s3.amazonaws.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          use: [
            {
              loader: '@svgr/webpack',
              // https://react-svgr.com/docs/options/
              options: {
                ref: true,
              },
            },
          ],
        },
      ],
    });

    return config;
  },
};
