module.exports = {
    ci: {
        collect: {
            url: ['https://www.pradappandiyan.com'],
            numberOfRuns: 3, // Run 3 times to get median values
            settings: {
                chromeFlags: '--no-sandbox --disable-dev-shm-usage --headless',
                preset: 'desktop',
            },
        },
        assert: {
            assertions: {
                // Performance metrics
                'categories:performance': ['error', { minScore: 0.7 }],
                'categories:accessibility': ['warn', { minScore: 0.8 }],
                'categories:best-practices': ['warn', { minScore: 0.8 }],
                'categories:seo': ['warn', { minScore: 0.8 }],
                
                // Page load specific metrics
                'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],
                'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
                'interactive': ['warn', { maxNumericValue: 3500 }],
                'speed-index': ['warn', { maxNumericValue: 3000 }],
                'total-blocking-time': ['warn', { maxNumericValue: 300 }],
                'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],
            },
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};
