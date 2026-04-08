// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import pluginUseTranslations from './src/plugins/plugin-use-translations';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'IlkomPedia',
			plugins: [pluginUseTranslations()],
			defaultLocale: 'id',
			locales: {
					id: {label: 'Bahasa Indonesia'},
					en: {label: 'English'},
					jv: {label: 'Bahasa Jawa'},
				},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/minouse3/ilkom-pedia' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
