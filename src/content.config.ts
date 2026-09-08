import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { blogSchema } from 'starlight-blog/schema'

/**
 * The sections of the plugin list at the bottom of /plugins/, in the order
 * they appear there. A plugin page joins the list by naming one of these as
 * its `pluginGroup`. See PluginList.astro.
 */
export const PLUGIN_GROUPS = [
	{ id: 'discover', title: 'Finding something to play' },
	{ id: 'incoming', title: 'Playing to Music Assistant from something else' },
	{ id: 'shared', title: 'Listening with other people' },
	{ id: 'visuals', title: 'Enhancing with lights and visuals' },
	{ id: 'scrobbling', title: 'Reporting what you played' },
	{ id: 'other-systems', title: 'Connecting to other systems' },
	{ id: 'diagnostics', title: 'Diagnostics' },
] as const;

const pluginGroupIds = PLUGIN_GROUPS.map((group) => group.id) as unknown as [
	string,
	...string[],
];

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: (context) => blogSchema(context).extend({
				/**
				 * If set, the post is a crosspost and its blog grid card gets a
				 * "shared from <crosspostSource>" badge. See CrosspostBadges.astro.
				 */
				crosspostSource: z.string().optional(),
				/**
				 * Set on a plugin page to put it in the list on the Plugins
				 * overview, in this group. The name and the line beside it there
				 * are the page's own title and description. See PluginList.astro.
				 */
				pluginGroup: z.enum(pluginGroupIds).optional(),
			}),
		}),
	}),
};
