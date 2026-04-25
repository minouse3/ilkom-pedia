// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx'
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
					label: 'Hello, World!',
					autogenerate: { directory: 'hello-world' },
				},
				{
					label: 'Lecturers',
					autogenerate: { directory: 'lecturers' },
				},
			],
		}),
		mdx(),
	],
});
