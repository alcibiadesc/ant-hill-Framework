<script>
  let pdfVersion = "./descargas/Ant Hill Framework.pdf";
</script>

<style>
  :root {
    font-size: 16px;
    font-family: "Open Sans";
    --text-primary: #b6b6b6;
    --text-secondary: #ececec;
    --bg-primary: #262022;
    --bg-secondary: #1a1516;
    --transition-speed: 600ms;
  }

  .navbar {
    position: fixed;
    background-color: var(--bg-primary);
    transition: width 600ms ease;
    overflow: scroll;
  }

  .navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .nav-item {
    width: 100%;
  }

  .nav-item:last-child {
    margin-top: auto;
  }

  .nav-link {
    display: flex;
    align-items: center;
    height: 5rem;
    color: var(--text-primary);
    text-decoration: none;
    filter: grayscale(100%) opacity(0.7);
    transition: var(--transition-speed);
  }

  .nav-link:hover {
    filter: grayscale(0%) opacity(1);
    background: var(--bg-secondary);
    color: var(--text-secondary);
  }

  .link-text {
    display: none;
    margin-left: 1rem;
  }

  .nav-link svg {
    width: 2rem;
    min-width: 2rem;
    margin: 0 1.5rem;
  }

  .fa-primary {
    color: #ffedd5;
  }

  .fa-secondary {
    color: #ff7d87;
  }

  .fa-primary,
  .fa-secondary {
    transition: var(--transition-speed);
  }

  .logo {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
    color: var(--text-secondary);
    background: var(--bg-secondary);
    font-size: 1.5rem;
    letter-spacing: 0.3ch;
    width: 100%;
  }

  .logo svg {
    transform: rotate(0deg);
    transition: var(--transition-speed);
  }

  .logo-text {
    display: inline;
    position: absolute;
    left: -999px;
    transition: var(--transition-speed);
  }

  .navbar:hover .logo svg {
    transform: rotate(-180deg);
  }

  /* Small screens */
  @media only screen and (max-width: 600px) {
    .navbar {
      bottom: 0;
      width: 100vw;
      height: 5rem;
    }

    .logo {
      display: none;
    }

    .navbar-nav {
      flex-direction: row;
    }

    .nav-link {
      justify-content: center;
    }

    .pilares {
      display: none;
    }

    .acuerdos {
      display: none;
    }

    .actividades {
      display: none;
    }
  }

  /* Large screens */
  @media only screen and (min-width: 600px) {
    .navbar {
      top: 0;
      width: 5rem;
      height: 100vh;
    }

    .navbar:hover {
      width: 16rem;
    }

    .navbar:hover .link-text {
      display: inline;
    }

    .navbar:hover .logo svg {
      margin-left: 11rem;
    }

    .navbar:hover .logo-text {
      left: 0px;
    }
  }
</style>

<nav class="navbar">
  <ul class="navbar-nav">
    <li class="logo">
      <a href="." class="nav-link">
        <span class="link-text logo-text courier">Ant Hill</span>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          data-icon="angle-double-right"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x">
          <g class="fa-group">
            <path
              fill="currentColor"
              d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94
              23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1
              0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94
              23.94 0 0 1 .1 34z"
              class="fa-secondary" />
            <path
              fill="currentColor"
              d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224
              386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94
              0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24
              0 0 1-.11 34z"
              class="fa-primary" />
          </g>
        </svg>
      </a>
    </li>

    <!-- Index Options -->

    <!-- Pilares-->
    <li class="nav-item pilares">
      <a href="guia/#pilares" class="nav-link">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">

          <path
            fill="currentColor"
            d="M544 464v32a16 16 0 0 1-16 16H112a16 16 0 0 1-16-16v-32a16 16 0 0
            1 16-16h176V153.25A80.06 80.06 0 0 1 241.61 96H112a16 16 0 0
            1-16-16V48a16 16 0 0 1 16-16h144.36a79.28 79.28 0 0 1 127.28
            0H528a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H398.39A80.06 80.06 0 0
            1 352 153.25V448h176a16 16 0 0 1 16 16z"
            class="fa-secondary" />
          <path
            fill="currentColor"
            d="M256 336c0-16.18
            1.34-8.73-85-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75 0
            320.33 0 336c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72
            144H56zm512 160c0-16.18
            1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C381.94 328.75
            384 320.33 384 336c0 44.18 57.31 80 128 80s128-35.82
            128-80zm-200-16l72-144 72 144z"
            class="fa-primary" />
        </svg>

        <span class="link-text">Pilares</span>
      </a>
    </li>

    <!-- Roles -->
    <li class="nav-item">
      <a href="guia/#roles" class="nav-link">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          data-icon="descargar"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          class="svg-inline--fa fa-alien-monster fa-w-18 fa-9x">
          <g class="fa-group">

            <path
              fill="currentColor"
              d="M512 0a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM128 0a48 48 0 1 0
              48 48 48 48 0 0 0-48-48zm272 128H240a16 16 0 0 0-16 16v171.59c4.63
              2.49 11.33 3.95 16 4.32h160c4.67-.37 11.35-1.83 16-4.3V143.7a16 16
              0 0 0-16-15.7z"
              class="fa-secondary" />
            <path
              fill="currentColor"
              d="M637.71 468.1l-44-110-41.09 46.4-2 18.2 27.69 69.2A32 32 0 0 0
              608 512a31.09 31.09 0 0 0 11.9-2.3 32 32 0 0 0
              17.81-41.6zm-591.4-110l-44 110a32 32 0 0 0 59.4
              23.8l27.71-69.2-2-18.2zm150.31-162.2a108.86 108.86 0 0 0-48.1-59.4
              61.72 61.72 0 0 0-56.1-3.3 64.81 64.81 0 0 0-37.5 44.9l-18.4
              80.2a64 64 0 0 0 14.4 56.7l67.2 75.9 10.09 92.6A32 32 0 0 0 160
              512c1.19 0 2.29-.1 3.5-.2a31.94 31.94 0 0 0
              28.29-35.3l-10.1-92.8a64 64 0 0 0-15.59-35l-43.31-49 17.61-70.3
              6.79 20.4c4.1 12.5 11.91 23.4 24.5 32.6l51.1 32.5c.38.24.78.46
              1.19.68V240l-16.06-10.2zm406.9 62.4L585 178.1a64.81 64.81 0 0
              0-37.5-44.9 61.7 61.7 0 0 0-56.1 3.3 109.53 109.53 0 0 0-48.11
              59.4L432 229.8 416 240v75.6c.42-.23.83-.46
              1.21-.7l51.1-32.5c12.61-9.2 20.4-20 24.5-32.6l6.81-20.4 17.59
              70.3-43.29 49a63.86 63.86 0 0 0-15.61 35l-10.1 92.8a32 32 0 0 0
              28.31 35.3c1.19.1 2.29.2 3.5.2a32 32 0 0 0 31.79-28.5l10.11-92.6
              67.19-75.9a64.4 64.4 0 0 0 14.41-56.7z"
              class="fa-primary" />
          </g>
        </svg>
        <span class="link-text">Roles</span>
      </a>
    </li>

    <!-- Artefactos -->
    <li class="nav-item">
      <a href="guia/#artefactos" class="nav-link">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          data-icon="descargar"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="svg-inline--fa fa-alien-monster fa-w-18 fa-9x">
          <g class="fa-group">

            <path
              fill="currentColor"
              d="M193.8 227.7L18.74 402.76a64 64 0 0 0 90.5
              90.5l148.88-148.88a75.36 75.36 0 0 1 6.58-45.78zM64 472a24 24 0 1
              1 24-24 24 24 0 0 1-24 24zm443.73-362.9a12 12 0 0
              0-20.12-5.51L413.25 178l-67.88-11.31-11.31-67.93 74.36-74.36a12 12
              0 0 0-5.66-20.16 143.92 143.92 0 0 0-136.58 37.93c-39.64
              39.64-50.55 97.1-34.05 147.2l-4.43 4.43 70.9 70.9a74.25 74.25 0 0
              1 85.4 13.9l7.21 7.21a141.74 141.74 0 0 0 78.61-40 143.94 143.94 0
              0 0 37.91-136.71z"
              class="fa-secondary" />
            <path
              fill="currentColor"
              d="M501.1 395.7a37.36 37.36 0 0 1 0 52.7l-52.7 52.7a37.18 37.18 0
              0 1-52.58.12l-.12-.12L278.6
              384c-23.1-23.1-27.5-57.6-13.9-85.4L158.1 192H96L0 64 64 0l128
              96v62.1l106.6 106.6a74.25 74.25 0 0 1 85.4 13.9z"
              class="fa-primary" />
          </g>
        </svg>
        <span class="link-text">Artefactos</span>
      </a>
    </li>

    <!-- Eventos -->
    <li class="nav-item">
      <a href="guia/#eventos" class="nav-link">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          data-icon="descargar"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="svg-inline--fa fa-alien-monster fa-w-18 fa-9x">
          <g class="fa-group">

            <path
              fill="currentColor"
              d="M0 192v272a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V192zm324.13
              141.91a11.92 11.92 0 0 1-3.53 6.89L281 379.4l9.4 54.6a12 12 0 0
              1-17.4 12.6l-49-25.8-48.9 25.8a12 12 0 0
              1-17.4-12.6l9.4-54.6-39.6-38.6a12 12 0 0 1 6.6-20.5l54.7-8
              24.5-49.6a12 12 0 0 1 21.5 0l24.5 49.6 54.7 8a12 12 0 0 1 10.13
              13.61zM304 128h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16h-32a16 16
              0 0 0-16 16v96a16 16 0 0 0 16 16zm-192 0h32a16 16 0 0 0
              16-16V16a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16
              16z"
              class="fa-secondary" />
            <path
              fill="currentColor"
              d="M314 320.3l-54.7-8-24.5-49.6a12 12 0 0 0-21.5 0l-24.5 49.6-54.7
              8a12 12 0 0 0-6.6 20.5l39.6 38.6-9.4 54.6a12 12 0 0 0 17.4
              12.6l48.9-25.8 49 25.8a12 12 0 0 0 17.4-12.6l-9.4-54.6
              39.6-38.6a12 12 0 0 0-6.6-20.5zM400 64h-48v48a16 16 0 0 1-16
              16h-32a16 16 0 0 1-16-16V64H160v48a16 16 0 0 1-16 16h-32a16 16 0 0
              1-16-16V64H48a48 48 0 0 0-48 48v80h448v-80a48 48 0 0 0-48-48z"
              class="fa-primary" />
          </g>
        </svg>
        <span class="link-text">Eventos</span>
      </a>
    </li>

    <!-- Actividades -->
    <!-- <li class="nav-item actividades">
      <a href="#actividades" class="nav-link">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          data-icon="descargar"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="svg-inline--fa fa-alien-monster fa-w-18 fa-9x">
          <g class="fa-group">

            <path
              fill="currentColor"
              d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5
              421.1 2.7 466 2.2 466.5a8 8 0 0 0-1.5 8.7A7.83 7.83 0 0 0 8
              480c66.3 0 116-31.8 140.6-51.4A305 305 0 0 0 256 448c141.4 0
              256-93.1 256-208S397.4 32 256 32zm114.1 163.8l-131 130a11 11 0 0
              1-15.6-.1l-75.7-76.3a11 11 0 0 1 .1-15.6l26-25.8a11 11 0 0 1
              15.6.1l42.1 42.5 97.2-96.4a11 11 0 0 1 15.6.1l25.8 26a11 11 0 0
              1-.1 15.5z"
              class="fa-secondary" />
            <path
              fill="currentColor"
              d="M370.1 195.8l-131 130a11 11 0 0 1-15.6-.1l-75.7-76.3a11 11 0 0
              1 .1-15.6l26-25.8a11 11 0 0 1 15.6.1l42.1 42.5 97.2-96.4a11 11 0 0
              1 15.6.1l25.8 26a11 11 0 0 1-.1 15.5z"
              class="fa-primary" />
          </g>
        </svg>
        <span class="link-text">Actividades</span>
      </a>
    </li> -->

    <!-- Acuerdos -->
    <li class="nav-item acuerdos">
      <a href="guia/#acuerdos" class="nav-link">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          data-icon="descargar"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          class="svg-inline--fa fa-alien-monster fa-w-18 fa-9x">
          <g class="fa-group">

            <path
              fill="currentColor"
              d="M640 143.9v191.8a16 16 0 0 1-16 16h-97.6a63.36 63.36 0 0
              0-22.2-37.9L358.6 195.6l26.1-23.9a16 16 0 0 0-21.6-23.6l-27
              24.7-53 48.5c-.1.1-.3.1-.4.2-21.1 18.9-46.5 7.8-56.1-2.7a39.69
              39.69 0 0 1 2.1-56c.1-.1.2-.3.3-.4l98.3-90a32 32 0 0 1
              21.6-8.4h85.9a31.94 31.94 0 0 1 22.6 9.4L512 128h112a16 16 0 0 1
              16 15.9z"
              class="fa-secondary" />
            <path
              fill="currentColor"
              d="M0 335.9V144a16 16 0 0 1 16-16h112l54.7-54.6a31.94 31.94 0 0 1
              22.6-9.4h83.8l-81.8 74.9a72 72 0 0 0-4.4 101.7c14.9 16.3 61.1 41.5
              101.7 4.4l30-27.5 149.3 121.2a32.06 32.06 0 0 1 4.6 45.1l-9.5
              11.7a32 32 0 0 1-45 4.7l-5.4-4.4-31.4 38.6a37.16 37.16 0 0 1-52.3
              5.4L327 424.3l-.2.2a64 64 0 0 1-90 9.3l-90.5-81.9H16a16 16 0 0
              1-16-16z"
              class="fa-primary" />
          </g>
        </svg>
        <span class="link-text">Acuerdos</span>
      </a>
    </li>

    <!-- Descargar -->
    <li class="nav-item">
      <a href={pdfVersion} class="nav-link" download>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          data-icon="descargar"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          class="svg-inline--fa fa-alien-monster fa-w-18 fa-9x">
          <g class="fa-group">

            <path
              fill="currentColor"
              d="M384 128H272a16 16 0 0 1-16-16V0H24A23.94 23.94 0 0 0 0
              23.88V488a23.94 23.94 0 0 0 23.88 24H360a23.94 23.94 0 0 0
              24-23.88V128zm-83.55 219.36L204 443.06a17.06 17.06 0 0 1-24
              0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80a16 16 0 0 1
              16-16h32a16 16 0 0 1 16 16v80h65.18c14.28 0 21.4 17.29 11.27
              27.36z"
              class="fa-secondary" />
            <path
              fill="currentColor"
              d="M377 105L279.1 7a24 24 0 0 0-17-7H256v112a16 16 0 0 0 16
              16h112v-6.1a23.9 23.9 0 0 0-7-16.9zm-87.82 215H224v-80a16 16 0 0
              0-16-16h-32a16 16 0 0 0-16 16v80H94.82c-14.28 0-21.4 17.29-11.24
              27.36l96.42 95.7a17.06 17.06 0 0 0 24 0l96.45-95.7c10.13-10.07
              3.01-27.36-11.27-27.36z"
              class="fa-primary" />
          </g>
        </svg>
        <span class="link-text">Descargar</span>
      </a>
    </li>

  </ul>
</nav>
