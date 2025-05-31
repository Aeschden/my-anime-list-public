<script>
  export let entry;
</script>

<li class="entry-card">
  {#if entry.image}
    <img
      src={entry.image}
      alt={entry.title}
      class="entry-img"
    />
  {/if}
  <div class="entry-details">
    <strong class="entry-title">{entry.title}</strong>
    <span class="entry-type">Type: {entry.type}</span>
    <span class="entry-status">Status: {entry.status}</span>
  </div>
</li>

<style>
  .entry-card {
    display: flex;
    align-items: center;
    background: #fff0f6;
    border: 2px solid #ffb3c1;
    border-radius: 8px;
    padding: 0.8rem 1rem;
    margin-bottom: 0.8rem;
  }
  .entry-img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 6px;
    border: 1px solid #ffc1da;
    margin-right: 1rem;
  }
  .entry-details {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
  .entry-title {
    font-size: 1.1rem;
    color: #d6336c;
  }
  .entry-type,
  .entry-status {
    font-size: 0.9rem;
    color: #555;
  }
</style>
