<script>
  import BuscarBlog from "./BuscarBlog.svelte";
  import { showStore } from "./../store/sidebar-store.js";
  import Sidebar from "./Sidebar.svelte";
  export let showSearchBar;
</script>

<style>
  a {
    text-decoration: none;
    color: #333;
  }

  nav {
    background: no-repeat url(../images/backgroundPaper.png) 0 0;
    background-color: #ebebeb;
    background-repeat: repeat;
    margin-top: 0;
    padding-top: 0;
    z-index: 1;
  }

  .title-card:hover {
    color: #ff7d87;
  }

  .title-card:focus {
    color: #ff7d87;
  }

  svg:hover {
    fill: #ff7d87;
  }

  .navSmall {
    display: none;
  }
  @media only screen and (max-width: 60em) {
    .navLarge {
      display: none;
    }

    .navSmall {
      display: contents;
    }
  }

  * {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }
</style>

{#if $showStore === true}
  <Sidebar class="navSmall" showSearchBar={showSearchBar} />
{/if}

<nav
  class="h3 db dt w-100 border-box pa3  top-0 ph5-l bb b--black-10 fixed shadow-1  ">
  <div
    class="di dtc  w-25 v-mid tl-l navSmall pt3"
    on:click={() => ($showStore = !$showStore)}>
    <svg
      class=" link grow  pl3 pt3"
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"><path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
  </div>
  <!-- End Small-->

  <div class=" dtc dtc-l   v-mid w-100 w-25-l tc tl-l ">
      <a
        href="."
        class=" courier fw6 mt1 f3 f3-l dib mr3 mr4-l underline-hover title-card link ">Ant  Hill</a>
    </div>

  {#if showSearchBar}
    <div class=" db dtc-l v-mid w-35 tc tr-l navLarge  ">
      <div class="courier fw3 f5 f4-l dib mr3 mr4-l pt1">
        <BuscarBlog />
      </div>
    </div>
  {/if}

  <!-- Normal and Big Screen -->
  <div class=" db dtc-l   v-mid w-65 tc tr-l navLarge  ">

    

    <a
      href="."
      class="courier fw3 f5 f4-l dib mr3 mr4-l underline-hover title-card link">Inicio</a>
    <a
      href="guia"
      class="courier fw3  f5 f4-l dib mr3 mr4-l underline-hover title-card link">Guia</a>
    <a
      href="blog"
      
      class="courier fw3  f5 f4-l dib mr3 mr4-l underline-hover title-card link">Blog</a>
  </div>
</nav>
