<script>
  import "../app.css";
</script>

<svelte:head>
  <title>Marle Refuge</title>
</svelte:head>

<div class="terminal-background" />
<main class="noise-overlay">
  <slot />
</main>

<style>
  .terminal-background {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgb(46, 28, 10);
    background: radial-gradient(
      circle,
      rgb(64, 39, 14) 0%,
      rgba(30, 19, 7, 1) 95%,
      rgb(23, 14, 2) 100%
    );
    border-radius: 4rem;
    border: 1rem solid black;
    filter: blur(5px);
  }

  .noise-overlay {
    position: relative;
    background-image: url("./noise.png");
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
