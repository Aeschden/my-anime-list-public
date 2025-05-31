<script lang="runes">
  let { data } = $props();
  let animes   = $state(data.animes);
</script>

<main>
  <h1>My Top 3 Anime</h1>
  <div class="anime-list">
    {#each animes as anime}
      <a href={`/anime/${anime.slug}`} class="anime-card">
        <img src={anime.image} alt={anime.title} />
        <h2>{anime.title}</h2>
      </a>
    {/each}
  </div>
</main>

<style>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: #d6336c;
    margin: 1rem 0;
    font-size: 2.5rem;
  }

  .anime-list {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .anime-card {
    background: #fff0f6;
    border: 2px solid #ffb3c1;
    border-radius: 12px;
    padding: 1rem;
    width: 180px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(255,179,193,0.4);
    transition: transform 0.2s;
  }
  .anime-card:hover {
    transform: translateY(-4px);
  }
  .anime-card img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }
  .anime-card h2 {
    color: #d6336c;
    font-size: 1.1rem;
    margin: 0;
  }
</style>
