<script lang="runes">
  let { characters } = $props();

  // Group characters by tier
  let grouped = $derived.by(() => {
    const tiers = { S: [], A: [], B: [], C: [], D: [], E: [], F: [] };
    for (const c of characters) {
      if (tiers[c.tier]) tiers[c.tier].push(c);
    }
    return tiers;
  });
</script>

<div class="tierlist">
  {#each Object.entries(grouped) as [tier, chars]}
    <section class="tier-section">
      <h3>Tier {tier}</h3>
      {#if chars.length}
        <ul>
          {#each chars as char}
            <li class="character-card">
              <a href={`/character/${char.id}`} class="char-link">
                <img src={char.image} alt={char.name} />
                <strong>{char.name}</strong>
              </a>
            </li>
          {/each}
        </ul>
      {:else}
        <p class="no-chars">No characters in this tier yet.</p>
      {/if}
    </section>
  {/each}
</div>

<style>
  .tierlist {
    display: grid;
    width: 100%;
    align-self: stretch;
    margin: 0;
    padding: 1rem 0;
    box-sizing: border-box;

    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
  }

  .tier-section {
    position: relative;
    background: #fff0f6;
    border: 2px solid #ffb3c1;
    border-radius: 10px;
    padding: 0.8rem;
    box-shadow: 0 4px 8px rgba(255, 179, 193, 0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    overflow: visible;
    min-height: 180px; /* slightly shorter */
  }

  .tier-section:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 16px rgba(255, 179, 193, 0.6);
    z-index: 1;
  }

  .tier-section h3 {
    background: #d6336c;
    color: #fff;
    padding: 0.3em;
    border-radius: 6px;
    text-align: center;
    margin-bottom: 0.6rem;
    font-size: 1rem;
  }

  .tier-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100px;
  }

  .character-card {
    width: 100%;
    margin-bottom: 0.6rem;
    display: flex;
    justify-content: center;
  }

  .char-link {
    text-decoration: none;
    color: inherit;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .char-link img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #ffb3c1;
    margin-bottom: 0.3rem;
  }

  .no-chars {
    text-align: center;
    font-style: italic;
    color: #666;
    font-size: 0.9rem;
  }
</style>
