<script lang="runes">
  let { data } = $props();
  const { character } = data;
</script>

<svelte:head>
  <title>{character.name}</title>
</svelte:head>

<main class="char-detail">
  <button class="back-btn" on:click={() => history.back()}>
    ← Back
  </button>

  <div class="char-info">
    <img src={character.image} alt={character.name} class="char-img" />
    <h1>{character.name}</h1>
    <p><strong>Age:</strong> {character.age ?? 'N/A'}</p>
    <p><strong>Role:</strong> {character.role}</p>
    <p><strong>Tier:</strong> {character.tier}</p>
    <p class="description"><strong>Description:</strong> {character.description}</p>
  </div>

  <form
    method="POST"
    class="delete-form"
    on:submit={(e) => {
      if (!confirm('Are you sure you want to delete this character?')) {
        e.preventDefault();
      }
    }}
  >
    <button type="submit" class="delete-btn">
      🗑️ Delete Character
    </button>
  </form>
</main>

<style>
  .char-detail {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
  }

  .back-btn {
    align-self: flex-start;
    background: #fff0f6;
    border: 2px solid #ffb3c1;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    color: #d6336c;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 1rem;
    transition: background 0.2s;
  }
  .back-btn:hover {
    background: #ffe0ed;
  }

  .char-info {
    background: #fff0f6;
    border: 2px solid #ffb3c1;
    border-radius: 12px;
    padding: 2rem;
    max-width: 360px;
    width: 100%;
    text-align: center;
    box-shadow: 0 4px 8px rgba(255, 179, 193, 0.4);
  }

  .char-img {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #ffb3c1;
    margin-bottom: 1rem;
  }

  h1 {
    color: #d6336c;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.4rem 0;
    line-height: 1.4;
  }

  .description {
    text-align: left;
    margin-top: 1rem;
  }

  .delete-form {
    margin-top: 1.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .delete-btn {
    background: #ffe0e6;
    border: 2px solid #d6336c;
    color: #d6336c;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.2s;
  }
  .delete-btn:hover {
    background: #ffd1d3;
  }
</style>
