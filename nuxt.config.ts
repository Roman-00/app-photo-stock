/**
 * Конфигурация приложения
 *
 * @link https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({
    app: {
        head: {
            charset:  'utf-8',
            viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
            title:    'ImageStock',
        }
    },
    css: [
        '@/assets/scss/common.scss',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "@/assets/scss/_variables.scss" as *;
                        @use "@/assets/scss/_mixins.scss" as *;
                        @use "@/assets/scss/_fonts.scss" as *;
                    `,
                }
            }
        }
    },
    postcss: {
        plugins: {
            'postcss-preset-env': {},
        }
    }
});
