module.exports = {
    plugins: [
        {
            resolve: '../gatsby-theme-portfolio-minimal',
            options: {
                // siteUrl: "https://artursdrikis.com", // Used for sitemap generation
                manifestSettings: {
                    favicon: './content/images/favicon.png', // Path is relative to the root
                    siteName: 'Arturs Drikis Portfolio', // Used in manifest.json
                    shortName: 'Arturs Portfolio', // Used in manifest.json
                    startUrl: '/', // Used in manifest.json
                    backgroundColor: '#FFFFFF', // Used in manifest.json
                    themeColor: '#000000', // Used in manifest.json
                    display: 'minimal-ui', // Used in manifest.json
                },
                // contentDirectory: './content',
                // blogSettings: {
                //     entityName: 'Article', // Used for the blog listing page title etc.
                //     path: '/blog', // Defines the slug for the blog listing page
                //     usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article),
                // },
                // skipContentDirectorySetup: true, // Default false
                // disableGatsbyPluginOffline: true, // Default false
                // plausibleAnalytics: {
                //     domain: 'example.com',
                // },
                // googleAnalytics: {
                //     trackingId: "UA-XXXXXX-X",
                //     anonymize: true, // Default true
                //     environments: ["production", "development"] // Default ["production"]
                // }
            },
        },
    ],
};
