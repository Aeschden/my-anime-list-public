<script lang="runes">
  import CharacterForm from '$lib/components/CharacterForm.svelte';
  let { data, form } = $props();
  const { anime } = data;
</script>

<svelte:head>
  <title>Add Character to {anime.title}</title>
</svelte:head>

<main class="add-page">
  <div class="inner">
    <a href={`/anime/${anime.slug}`} class="back">← Back to {anime.title}</a>
    <h1>Add Character to {anime.title}</h1>
    {#if form?.error}<p class="error">{form.error}</p>{/if}
    <CharacterForm animeSlug={anime.slug} />
  </div>
</main>

<style>
  .add-page {
    display:flex; justify-content:center; width:100%;
  }
  .inner {
    width:100%; max-width:50%;
    display:flex; flex-direction:column; gap:1rem;
  }
  .back {
    align-self: flex-start;
    background: #fff0f6;
    border: 2px solid #ffb3c1;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    color: #d6336c;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.2s;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  h1 {
    text-align:center; color:#d6336c; margin:0; font-size:1.8rem;
  }
  .error {
    text-align:center; color:#d6336c;
  }
   .back:hover,
  .add-link:hover {
    background: #ffe0ed;
  }
</style>
