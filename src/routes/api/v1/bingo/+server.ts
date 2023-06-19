// src/routes/p/[id]/+page.server.ts
import db from '$lib/database'
import {json} from '@sveltejs/kit'

export async function GET() {
    const bingo = await db.bingo.findMany();
    return json({ bingo });
}