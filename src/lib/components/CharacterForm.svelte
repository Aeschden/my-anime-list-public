<script lang="runes">
  let { animeSlug } = $props();

  let name        = $state('');
  let age         = $state('');
  let role        = $state('');
  let tier        = $state('C');
  let description = $state('');
  let imageUrl    = $state('');
</script>

<form method="POST" enctype="multipart/form-data" class="character-form">
  <input type="hidden" name="animeSlug" value={animeSlug} />

  <div class="field">
    <label for="name">Name</label>
    <input id="name" name="name" bind:value={name} required />
  </div>

  <div class="field">
    <label for="age">Age</label>
    <input id="age" name="age" type="number" bind:value={age} min="0" />
  </div>

  <div class="field">
    <label for="role">Role</label>
    <input id="role" name="role" bind:value={role} placeholder="e.g. Main Character" />
  </div>

  <div class="field">
    <label for="tier">Tier</label>
    <select id="tier" name="tier" bind:value={tier}>
      <option>S</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
      <option>D</option>
      <option>E</option>
      <option>F</option>
    </select>
  </div>

  <div class="field">
    <label for="description">Description</label>
    <textarea id="description" name="description" bind:value={description}></textarea>
  </div>

  <div class="field">
    <label for="image">Image URL</label>
    <input
      id="image"
      name="image"
      type="text"
      bind:value={imageUrl}
      placeholder="/images/placeholder.png"
      pattern="^(/.*|https?://.*)"
      title="Enter a relative path like /images/maomao.png or a full URL"
    />
  </div>

  <button type="submit">Add Character</button>
</form>

<style>
  .character-form {
    width: 100%;
    padding: 2rem;
    background: #fff0f6;
    border: 2px solid #ffb3c1;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(255, 179, 193, 0.4);
    font-family: system-ui, sans-serif;
    color: #333;
  }

  .field {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.2rem;
  }

  .field label {
    margin-bottom: 0.4rem;
    font-weight: 600;
    color: #d6336c;
  }

  .field input,
  .field select,
  .field textarea {
    padding: 0.6rem;
    font: inherit;
    border: 1px solid #ffc1da;
    border-radius: 6px;
    width: 100%;
    box-sizing: border-box;
  }

  .field textarea {
    min-height: 100px;
    resize: vertical;
  }

  button {
    width: 100%;
    padding: 0.8rem;
    background: #d6336c;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
  }

  button:hover {
    background: #ba2e5a;
  }
</style>
