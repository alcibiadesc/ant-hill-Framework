<script>
  export let segment;
  let pdfVersion = "./descargas/Ant Hill Framework.pdf";
  let leer = "./gif/Ojo.svg";
  let documento = "./gif/Documento.svg";
</script>

<style>
  a {
    color: #333333;
  }

  p {
    padding: 0;
    margin: 1rem;
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 700;
  }
</style>

<section class="tc tl-l">

  <!-- Leer Online -->
  <div class=" dib pa2 mh4 tc">
    <a
      aria-current={segment === 'guia' ? 'page' : undefined}
      href="guia"
      class="dim">
      <img src={leer} alt="why gif" class="img-svg" />
    </a>
    <br />
    <a aria-current={segment === 'guia' ? 'page' : undefined} href="guia">
      <p>Leer Online</p>
    </a>
  </div>

  <!-- Descargar PDF -->
  <div class=" dib pa2 mh4 tc ">
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
