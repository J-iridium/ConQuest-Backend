<script lang="ts">
    import Counter from '../lib/Counter.svelte'
    import SvelteKitLogo from '../assets/favicon.png'
    import ViteIcon from '../assets/vite.svg'

    import BingoDataPreview from '../lib/BingoDataPreview.svelte';
    import type { PageData } from './$types'
    import { each } from 'svelte/internal';
    export let data: PageData
</script>

<main>
    <h1>Hero Quest Amdin Panel</h1> 
    <form method="POST">
      <!-- Form inputs -->
      <input id="title" class="tweet-input" name="title" inputmode="text" />
      <input id="description" class="tweet-input" name="description" inputmode="text" />
      <input id="expiresAt" class="tweet-input" name="expiresAt" inputmode="text" />
      <!-- Submit button -->
      <button class="tweet-button" type="submit">Paw</button>
    </form>

    {#each data.feed as obj}
      <BingoDataPreview title={obj.title} description={obj.description} />
      <br>  

    {/each}
    <!-- {data.feed} -->

    

</main>

<style>
    form {
    padding-bottom: 10px;
    border-bottom: 4px solid #222;
  }
  .no-feed {
    margin-top: 10px;
    text-align: center;
  }
  .tweet-input {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
      resize: vertical;
    }

    .tweet-button {
      margin-top: 10px;
      padding: 8px 16px;
      font-size: 16px;
      background-color: #1da1f2;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
</style>
  