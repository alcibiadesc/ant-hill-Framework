<script>
	import { showStore } from './../store/sidebar-store.js';


  import { fly } from "svelte/transition";


  

</script>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    padding: 2rem 1rem 0.6rem;
    border-left: 1px solid #aaa;
    background: #333333;
    overflow: auto;
    width: 10rem;
    z-index: 2;
  }

  svg:hover{
    fill: #ff7d87;
  }

  h3:hover{
 color: #ff7d87;
  }

  h3:focus{
    color: #ff7d87;
  }

  h3{
    color: white;
    
  }
  a{
    text-decoration: none;
  }
</style>


  <nav transition:fly={{ x: -250, opacity: 1 }} class="bl black" on:clickoutside={() => {$showStore = false}}>

<div on:click={()=> $showStore = !$showStore} >
<svg class="grow ml4 mt3 absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28px" height="28px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
</div>
    <div class="ml3 mt3">


        <a href="." ><h3 class="link underline-hover grow courier">Inicio</h3></a>
        <a href="guia" ><h3 class="link underline-hover grow courier">Guia</h3></a>
        <a href="blog"on:click={()=> $showStore = !$showStore}><h3 class="link underline-hover grow courier">Blog</h3></a>
      
    </div>

    
  </nav>



