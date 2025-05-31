<script lang="runes">
  import TierList from '$lib/components/TierList.svelte';
  let { data } = $props();
</script>

<main>
  <a href="/" class="back">← Home</a>
  <h1>{data.anime.title} – Characters</h1>

  <TierList characters={data.characters} />

  <a href={`/anime/${data.anime.slug}/add`} class="add-link">
    ＋ Add New Character
  </a>
</main>

<style>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  
  .add-link {
    align-self: center;
    background: #fff0f6;
    border: 2px solid #ffb3c1;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    color: #d6336c;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.2s;
    margin-bottom: 1rem;
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
  }

  .back:hover,
  .add-link:hover {
    background: #ffe0ed;
  }

  h1 {
    color: #d6336c;
    margin-bottom: 1rem;
    font-size: 2rem;
    text-align: center;
  }
</style>
