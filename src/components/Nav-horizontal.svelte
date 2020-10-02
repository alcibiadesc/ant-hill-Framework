<script>
	import { showStore } from './../store/sidebar-store.js';
  
  import Sidebar from "./Sidebar.svelte";
  

  
  
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

<Sidebar class="navSmall"  />
{/if}


<nav
  class="db dt w-100 border-box pa3  top-0 ph5-l bb b--black-10 fixed shadow-1 ">
  <div
    class="di dtc mt2 w-25  tl-l navSmall"
    on:click={()=> $showStore = !$showStore}
    >
    <svg
      class=" link grow pt3 pl3"
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"><path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
  </div>
  <!-- End Small-->

  <div class="di dt-l mt2 dtc v-mid w-100 tl-l tc mb2 mb0-l ">
      


      <a
        href="."
        class="f4 f4-l courier fw7 dib mr3 mr4-l  title-card link tl ">Ant <br>
        Hill</a>
    </div>

  <!-- Normal and Big Screen -->
  <div class="db dtc-l mt2 v-mid w-100 w-75-l tc tr-l navLarge top-2 pt3">
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
