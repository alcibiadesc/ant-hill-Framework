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
      margin-left: 1rem;
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
  <div id="why">
    <h3 class=" f2 lh-copy courier mb0">¿Para qué?</h3>

    <section class="cf pa3 mt0 pt0 fw3 w-75-l">

      <div class="fl w-100 w-100-m w-90-l f3-l f4-ns ">
        La mayoría de modelos de escalado Agile requieren que todos los equipos
        trabajen bajo el mismo framework o método.
        <p>
          El propósito de Ant Hill es
          <mark>respetar como trabajan los equipos</mark>
          y establecer canales de comunicación para la sincronización y
          alineamiento de la organización
        </p>
      </div>

    </section>

    <Accesos />

  </div>

</main>
<Credits />
