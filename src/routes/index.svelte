<script>
  import Credits from "./../components/99-Credits.svelte";
  import Accesos from "./../components/Accesos.svelte";
  import Title from "./../components/1-Title.svelte";
  import Why from "./../components/2-Why.svelte";
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
  <script>
    let whyImage = "./gif/why.svg";
  </script>
  <Why />
  <Accesos />

</main>
<Credits />
