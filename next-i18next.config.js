module.exports = {
    debug: process.env.NODE_ENV === 'development',
    i18n: {
        locales: ['en', 'cn'],
        defaultLocale: 'en',
    },
    react: { useSuspense: false },
};
