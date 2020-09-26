<script>
  import Title from "./../components/1-Title.svelte";
  import Why from "./../components/2-Why.svelte";
  import Accesos from "./../components/Accesos.svelte";
  import Credits from "./../components/99-Credits.svelte";
</script>

<style>
  .sections {
    margin-left: 3rem;
    margin-right: 2rem;
  }

  /* Small screens */
  @media only screen and (max-width: 600px) {
    .sections {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }

  /* Large screens */
  @media only screen and (min-width: 600px) {
    .sections {
      margin-left: 3rem;
      margin-right: 2rem;
    }
  }
</style>

<svelte:head>
  <title>Inicio</title>
</svelte:head>

<main class="sections ">
  <Title />
  <Why />
  <Accesos />

</main>
<Credits />
