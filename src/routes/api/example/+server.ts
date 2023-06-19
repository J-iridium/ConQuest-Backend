import { json } from '@sveltejs/kit'

export async function GET(event) {
  return json("received get?");
}