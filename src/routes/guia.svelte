<script>
  import Navbar from "./../components/Navbar.svelte";
  import Title from "./../components/1-Title.svelte";
  import Pilares from "./../components/3-Pilares.svelte";
  import Roles from "./../components/4-Roles.svelte";
  import Artefactos from "./../components/5-Artefactos.svelte";
  import Eventos from "./../components/6-Eventos.svelte";
  import Actividades from "./../components/7-Actividades.svelte";
  import Acuerdos from "./../components/8-Acuerdos.svelte";
  import Credits from "./../components/99-Credits.svelte";
  import { fade } from "svelte/transition";
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
  <title>👉 Ant Hill | Guia</title>
  <meta property="og:url" content="ant-hill.org/guia" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Ant Hill: Guia" />
  <meta
    property="og:description"
    content="Un framework para generar feedback loops orientados a la aportación continua de valor respetando como trabajan los equipos." />

  <title>👉 Ant Hill | Guia</title>
  <meta
    name="description"
    content="Un framework para generar feedback loops orientados a la aportación continua de valor. El propósito de Ant Hill es sincronizar y alinear equipos respetando como trabajan." />
</svelte:head>
<div transition:fade>
  <Navbar />

  <main class="sections">
    <Title />
    <Pilares />
    <Roles />
    <Artefactos />
    <Eventos />
    <Actividades />
    <Acuerdos />
  </main>

  <Credits />
</div>
