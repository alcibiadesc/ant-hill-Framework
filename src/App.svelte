<script>
  import Roles from "./sections/4-Roles.svelte";
  import Credits from "./sections/99-Credits.svelte";
  import Navbar from "./Navbar.svelte";
  import Title from "./sections/1-Title.svelte";
  import Why from "./sections/2-Why.svelte";
  import Pilares from "./sections/3-Pilares.svelte";
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

<Navbar />

<main class="sections">
  <Title />
  <Why />
  <Pilares />
  <Roles />
</main>

<Credits />
