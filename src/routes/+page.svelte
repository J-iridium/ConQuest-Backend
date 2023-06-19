<script lang="ts">
    import Counter from '../lib/Counter.svelte'
    import SvelteKitLogo from '../assets/favicon.png'
    import ViteIcon from '../assets/vite.svg'
</script>

<main>
    
    <h1>SvelteKit Skeleton Project</h1>
    
    <h2>
        Internal JIRIDIUM project setup for WebApps
    </h2>

    <div class="card">
      <Counter />
    </div>
    

    <h3>
      Documentation:
    </h3>
    <p>
      Check out <a href="https://svelte.dev/docs" target="_blank" rel="noreferrer">Svelte</a>, the official Svelte app framework documentation!
    </p>
    <p class="read-the-docs">
      Check out <a href="https://kit.svelte.dev/docs/" target="_blank">SvelteKit Doc</a>, for the official SvelteKit documentation! 
    </p>
    
    <h3>Powered by</h3>

    <div>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={SvelteKitLogo}  class="logo svelte" alt="Svelte Logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={ViteIcon} class="logo" alt="Vite Logo" />
      </a>
    </div> 
</main>

<style>
    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
      
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.svelte:hover {
      filter: drop-shadow(0 0 2em rgba(253, 253, 253, 0.667));
    }
    .read-the-docs {
      color: #888;
    }
</style>
  