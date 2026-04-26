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
					translations: {
						id: 'Hello World!',
						en: 'Hello World',
						jv: 'Hello Dunyo',
					},
					autogenerate: { directory: 'hello-world' },
				},
				{
					label: 'Lecturers',
					translations: {
						id: 'Dosen',
						en: 'Lecturers',
						jv: 'Gatau',
					},
					autogenerate: { directory: 'lecturers' },
				},
				{
					label: 'Majors',
					translations: {
						id: 'Penjurusan',
						en: 'Majors',
						jv: 'gatau',
					},
					autogenerate: { directory: 'majors' },
				},
				{
					label: 'Syllabus',
					translations: {
						id: 'Kurikulum',
						en: 'Syllabus',
						jv: 'yo ndak tau',
					},
					autogenerate: { directory: 'syllabus' },
				},{
					label: 'Organization',
					translations: {
						id: 'UKM/Underbow/Komunitas',
						en: 'Community',
						jv: 'saya akan lawan!',
					},
					autogenerate: { directory: 'organization-community' },
				},
			],
		}),
		mdx(),
	],
});
