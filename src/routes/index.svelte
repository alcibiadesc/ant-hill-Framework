<script>
  import Title from "./../components/1-Title.svelte";
  import Why from "./../components/2-Why.svelte";
  import Accesos from "./../components/Accesos.svelte";
  import Credits from "./../components/99-Credits.svelte";
</script>

<svelte:head>
  <title>👉 Ant Hill | Un framework Agile</title>
  <meta property="og:url" content="ant-hill.org/" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Ant Hill" />
  <meta
    property="og:description"
    content="Un framework para generar feedback loops orientados a la aportación continua de valor respetando como trabajan los equipos." />

  <title>👉 Ant Hill | Un framework Agile</title>
  <meta
    name="description"
    content="Para generar feedback loops orientados a la aportación continua de valor. El propósito de Ant Hill es sincronizar y alinear equipos respetando como trabajan." />
</svelte:head>

<main class="sections">
  <Title />
  <Why />
  <Accesos />
</main>
<Credits />
