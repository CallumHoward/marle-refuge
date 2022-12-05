<script>
  import "../app.css";
</script>

<svelte:head>
  <title>Marle Refuge</title>
</svelte:head>

<div class="terminal-background" />
<div class="noise-overlay" />
<main>
  <slot />
</main>

<style>
  main {
    position: relative;
    width: 100%;
    height: 100%;
    filter: drop-shadow(0px 0px 4px var(--accent-color));
  }

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
    position: fixed;
    background-image: url("./noise-edge.png");
    width: 100%;
    height: 100%;
    animation: animate-noise-overlay 5s linear infinite;
    background-size: 800px 800px;
  }

  @keyframes animate-noise-overlay {
    0% {
      background-position-y: 0;
    }

    100% {
      background-position-y: 800px;
    }
  }
</style>
