<script lang="runes">
  import NavBar from '$lib/components/NavBar.svelte';
</script>

<NavBar />

<main class="page-content">
  <slot />
</main>

<style>
  :global(html, body) {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  :global(body) {
    background-color: #ffeef8;
  }

  .page-content {
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
  }
</style>
