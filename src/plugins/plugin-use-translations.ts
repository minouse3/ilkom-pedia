import type { StarlightPlugin } from '@astrojs/starlight/types';

export default function pluginUseDynamicTranslations(): StarlightPlugin {
  return {
    name: 'plugin-use-dynamic-translations',

    hooks: {
      'config:setup'({ absolutePathToLang, useTranslations, logger }) {
        // Example: resolve language dynamically from a content file
        const lang = absolutePathToLang(
          '../src/content/docs/id/index.mdx'
        );

        const t = useTranslations('id');

        logger.info(t('aside.tip')); // Log a translation key
      },
    },
  };
}