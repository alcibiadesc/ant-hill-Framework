<script>
  import Navbar from "./../components/Navbar.svelte";
  import Title from "./../components/1-Title.svelte";
  import Why from "./../components/2-Why.svelte";
  import Pilares from "./../components/3-Pilares.svelte";
  import Roles from "./../components/4-Roles.svelte";
  import Artefactos from "./../components/5-Artefactos.svelte";
  import Eventos from "./../components/6-Eventos.svelte";
  import Actividades from "./../components/7-Actividades.svelte";
  import Acuerdos from "./../components/8-Acuerdos.svelte";
  import Credits from "./../components/99-Credits.svelte";
  import { fade } from "svelte/transition";
  import { flip } from "svelte/animate";
</script>

<style>
  .sections {
    margin-left: 7rem;
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
      margin-left: 7rem;
      margin-right: 2rem;
    }
  }
</style>

<svelte:head>
  <title>Guia</title>

</svelte:head>

<div transition:fade>

  <Navbar />

  <main class="sections">
    <Title />
    <Why />
    <Pilares />
    <Roles />
    <Artefactos />
    <Eventos />
    <Actividades />
    <Acuerdos />
  </main>

  <Credits />
</div>
