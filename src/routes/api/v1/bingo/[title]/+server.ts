// src/routes/p/[id]/+page.server.ts
import db from '$lib/database'
import {json} from '@sveltejs/kit'

export async function GET(event) {
    const { title } = event.params;

    const bingo = await db.bingo.findUnique({
        where: { title },
    });
    
    return json({ bingo });
}

// // 1.
// export const load = (async ({ params: { id } }) => {
//     const bingo = await db.bingo.findUnique({
//         where: { id },
//     });
//     return { bingo };
    
//     // // 2.
//     // const user = await db.user.findUnique({
//     //     where: { name_identifier:id },
//     // });
//     // const user_posts = await db.post.findMany({
//     //     where: { author_identifier:id }
//     // })
//     // 3.
//     //return { user, user_posts };
// }) satisfies PageServerLoad;