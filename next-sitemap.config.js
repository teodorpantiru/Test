/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.cremil-tspi.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    outDir: 'public',
    additionalPaths: async (config) => [
        await config.transform(config, '/servicii/montaj-aer-conditionat'),
        await config.transform(config, '/servicii/proiectare-sisteme-de-securitate'),
        await config.transform(config, '/servicii/camere-de-supraveghere'),
        await config.transform(config, '/servicii/automatizari-bariere-porti'),
        await config.transform(config, '/servicii/sistem-antiefractie'),
        await config.transform(config, '/servicii/instalare-mentenanta-sisteme-detectie-incendiu'),
        await config.transform(config, '/servicii/instalare-mentenanta-sistem-videointerfonie'),
        await config.transform(config, '/servicii/casa-inteligenta'),
        await config.transform(config, '/servicii/retea-voce-date'),
    ],
};