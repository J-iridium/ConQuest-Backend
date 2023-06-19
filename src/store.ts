import { writable, type Writable } from "svelte/store";

export const currRoute : Writable<string> = writable("/");