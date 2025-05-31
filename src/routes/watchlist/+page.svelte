<script lang="runes">
  import EntryCard from "$lib/components/EntryCard.svelte";

  let { data, form } = $props();
  let allEntries = data.entries;

  const allTypes    = ["series", "movie"];
  const allStatuses = ["ongoing", "done", "announced"];

  let selectedTypes    = $state(new Set(allTypes));
  let selectedStatuses = $state(new Set(allStatuses));

  let filteredEntries = $derived.by(() => {
    return allEntries.filter(
      (e) =>
        selectedTypes.has(e.type) &&
        selectedStatuses.has(e.status)
    );
  });

  function toggleType(type) {
    const copy = new Set(selectedTypes);
    if (copy.has(type)) copy.delete(type);
    else               copy.add(type);
    selectedTypes = copy;
  }

  function toggleStatus(status) {
    const copy = new Set(selectedStatuses);
    if (copy.has(status)) copy.delete(status);
    else                  copy.add(status);
    selectedStatuses = copy;
  }
</script>

<svelte:head>
  <title>My Watchlist</title>
</svelte:head>

<main class="watchpage">
  <a href="/" class="back">← Home</a>
  <h1>My Watchlist</h1>

  <section class="filter-container">
    <fieldset class="filter-box">
      <legend>Filter by Type:</legend>
      {#each allTypes as type}
        <label class="filter-label">
          <input
            type="checkbox"
            checked={selectedTypes.has(type)}
            onchange={() => toggleType(type)}
          />
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </label>
      {/each}
    </fieldset>

    <fieldset class="filter-box">
      <legend>Filter by Status:</legend>
      {#each allStatuses as status}
        <label class="filter-label">
          <input
            type="checkbox"
            checked={selectedStatuses.has(status)}
            onchange={() => toggleStatus(status)}
          />
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </label>
      {/each}
    </fieldset>
  </section>

  {#if filteredEntries.length > 0}
    <ul class="watchlist">
      {#each filteredEntries as entry}
        <EntryCard {entry} />
      {/each}
    </ul>
  {:else}
    <p class="empty">No matching entries found.</p>
  {/if}

  <h2>Add to Watchlist</h2>
  {#if form?.error}
    <p class="error">{form.error}</p>
  {/if}
  <form method="POST" class="watch-form">
    <div class="field">
      <label for="title">Title</label>
      <input id="title" name="title" required />
    </div>
    <div class="field">
      <label for="image">Image URL</label>
      <input
        id="image"
        name="image"
        type="text"
        placeholder="/images/placeholder.png"
        pattern="^(/.*|https?://.*)"
        title="Enter a path (/images/…) or full URL"
      />
    </div>
    <div class="field">
      <label for="type">Type</label>
      <select id="type" name="type" required>
        <option value="">-- Select type --</option>
        <option value="series">Series</option>
        <option value="movie">Movie</option>
      </select>
    </div>
    <div class="field">
      <label for="status">Status</label>
      <select id="status" name="status" required>
        <option value="">-- Select status --</option>
        <option value="ongoing">Ongoing</option>
        <option value="done">Done</option>
        <option value="announced">Announced</option>
      </select>
    </div>
    <button type="submit">Add Anime</button>
  </form>
</main>

<style>
  .watchpage {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
  }

  .back {
    align-self: flex-start;
    background: #fff0f6;
    border: 2px solid #ffb3c1;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    color: #d6336c;
    text-decoration: none;
    font-weight: bold;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: background 0.2s;
  }
  .back:hover {
    background: #ffe0ed;
  }

  h1,
  h2 {
    color: #d6336c;
    margin-bottom: 1rem;
    text-align: center;
  }

  .filter-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
    width: 100%;
    justify-content: center;
  }

  .filter-box {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid #ffb3c1;
    border-radius: 8px;
    background: #fff0f6;
  }
  .filter-box legend {
    font-weight: bold;
    color: #d6336c;
    margin-right: 1rem;
  }
  .filter-label {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.9rem;
    color: #333;
  }
  .filter-label input {
    width: 1rem;
    height: 1rem;
    cursor: pointer;
  }

  .watchlist {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem 0;
    width: 100%;
  }

  .empty {
    font-style: italic;
    color: #666;
    margin-bottom: 2rem;
  }

  .watch-form {
    width: 100%;
    background: #fff0f6;
    border: 2px solid #ffb3c1;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 8px rgba(255, 179, 193, 0.4);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .field {
    display: flex;
    flex-direction: column;
  }
  .field label {
    margin-bottom: 0.4rem;
    font-weight: 600;
    color: #d6336c;
  }
  .field input,
  .field select {
    padding: 0.6rem;
    border: 1px solid #ffc1da;
    border-radius: 6px;
    font: inherit;
  }

  button {
    align-self: flex-end;
    padding: 0.6rem 1.2rem;
    background: #d6336c;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s;
  }
  button:hover {
    background: #ba2e5a;
  }

  .error {
    color: #d6336c;
    text-align: center;
  }
</style>
