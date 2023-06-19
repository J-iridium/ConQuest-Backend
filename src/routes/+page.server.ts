import db from '../lib/database';
import type { Actions, PageServerLoad } from "./$types"


import { fail} from '@sveltejs/kit';
/** @type {import('./$types').Actions} */
export const actions: Actions = {
	default: async ({ request }) => {
		const { title,description,expiresAt } = Object.fromEntries(await request.formData()) as {
			title: string,
            description: string,
            expiresAt: string,
		}

		try {
			await db.bingo.create({
                data: {
				    title: title,
                    description: description,
                    // expiresAt: expiresAt,
                }
			})
		} catch (err) {
			console.error(err);
			return fail(500, { message: "Could not create the bingo." })
		}

		return {
			status: 201,
		};
	},
} satisfies Actions
export const load = (async () => {
    // 1.
        const response = await db.bingo.findMany({
            where: { isActive : true },
        });
    
        // 2.
        return { feed: response };
    }) satisfies PageServerLoad;