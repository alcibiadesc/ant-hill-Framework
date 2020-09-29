<script>
  import { posts } from "../../posts";
  import Title from "./../../components/1-Title.svelte";

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
      margin-left: 3rem;
      margin-right: 2rem;
    }
  }

  .sections {
    margin-left: 3rem;
    margin-right: 2rem;
  }

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
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<main class="sections">
  <Title />

  <h2 class="tl-l tc">Últimos artículos</h2>

  {#each postsOrdered as post}
    <a rel="prefetch" href={`/posts/${post.permalink}`}>

      <div class=" center-m post-card w-60-ns w-80-m w-100 shadow-4 br3">

        <h2
          class="f3 lh-copy courier mb0 ph3 pt3 underline-hover title-card link">
          {post.title}
        </h2>

        {#if post.description}
          <p class="ph3">{shortDescription(post.description)}</p>
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
