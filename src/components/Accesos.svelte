<script>
  import Guia from "./../routes/guia.svelte";
  export let segment;
  let pdfVersion = "./descargas/Ant Hill Framework.pdf";
  let leer = "./gif/Ojo.svg";
  let documento = "./gif/Documento.svg";
  let corazon = "./gif/Corazon.svg";
</script>

<style>
  a {
    color: #333333;
  }

  p {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 700;
  }
</style>

<section class="tc tl-l">

  <!-- Leer Online -->
  <div class=" dib pa2 tc ma2">
    <a
      aria-current={segment === 'guia' ? 'page' : undefined}
      href="guia"
      class="dim db">
      <img src={leer} alt="why gif" class="img-svg" />
    </a>
    
    <a aria-current={segment === 'guia' ? 'page' : undefined} href="guia">
      <p >Leer Guia</p>
    </a>
  </div>

    <!-- Blog -->
  <div class=" dib pa2  tc ma2">
    <a
      aria-current={segment === 'guia' ? 'page' : undefined}
      href="blog"
      class="dim">
      <img src={corazon} alt="why gif" class="img-svg" />
    </a>
    <br />
    <a aria-current={segment === 'guia' ? 'page' : undefined} href="Blog">
      <p>Blog</p>
    </a>
  </div>

  <!-- Descargar PDF -->
  <div class=" dib pa2  tc ma2">
    <a href={pdfVersion} class="dim" target="_blank">
      <img
        src={documento}
        alt="Descargar PDF"
        class="img-svg"
        id="descargar_pdf_home" />
    </a>
    <br />
    <a href={pdfVersion} target="_blank">
      <p>Descargar PDF</p>
    </a>
  </div>


</section>
