<script>
	import NavHorizontal from './../../components/Nav-horizontal.svelte';
  import { posts } from "../../posts";
  
  

  // Order Post by recent
  let postsOrdered = posts.sort((a, b) => {
    a = a.date
      .split("/")
      .reverse()
      .join("");
    b = b.date
      .split("/")
      .reverse()
      .join("");

    return a < b ? 1 : a > b ? -1 : 0;
  });

  const dateTransformer = inputDate => {
    let arrayDate = inputDate.split("/");
    let reverseDate = arrayDate.reverse();
    let dia = arrayDate[2];
    let mes = arrayDate[1] == 0 ? arrayDate[1].substring(1) : arrayDate[1];
    let año = arrayDate[0];

    const arrayMeses = [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sept",
      "oct",
      "nov",
      "dic"
    ];
    return `${dia} ${arrayMeses[mes - 1]}. ${
      año == new Date().getFullYear() ? "" : año
    }`;
  };

  const shortDescription = inputDescription => {
    let output = "";
    inputDescription.length > 140
      ? (output = inputDescription.substring(0, 140) + "...")
      : (output = inputDescription);
    return output;
  };
</script>

<style>
  .post-card {
    background: white;
    min-height: 8vh;
  }

  .title-card:hover {
    color: #ff7d87;
  }

  .title-card:focus {
    color: #ff7d87;
  }

  a {
    text-decoration: none;
    color: #333333;
  }

  @media screen and (min-width: 64em) {
    .post-description {
      font-size: 1.25rem;
    }
  }
</style>

<svelte:head>
  <title>Ant Hill | Blog</title>
</svelte:head>

<NavHorizontal />
<main class="sections">
  

  <h2 class="tl-l tc">Últimos artículos</h2>

  {#each postsOrdered as post}
    <a rel="prefetch" href={`/blog/${post.permalink}`}>

      <div class=" center-m post-card w-60-ns w-80-m w-100 shadow-4 br3">

        <h1
          class="f3 lh-copy courier mb0 ph3 pt3 underline-hover title-card link">
          {post.title}
        </h1>

        {#if post.description}
          <p class="ph3 post-description lookhere">
            {shortDescription(post.description)}
          </p>
        {/if}

        {#if post.date}
          <p class=" ma1 pb2 pr2 tr f6 gray lh-copy courier">
            {dateTransformer(post.date)}
          </p>
        {/if}

      </div>
    </a>
  {/each}

  

</main>


