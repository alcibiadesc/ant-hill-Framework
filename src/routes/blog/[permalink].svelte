<script context="module">
  // import the logic for finding a post based on permalink
  import { findPost } from "../../posts";

  // sapper calls this to load our data
  export function preload(page) {
    // find the post based on the permalink param
    const post = findPost(page.params.permalink);

    // return a list of props
    return { post };
  }
</script>

<script>
  import NavHorizontal from "./../../components/Nav-horizontal.svelte";
  // this prop is filled from the result of the `preload()`
  export let post;

  import Credits from "./../../components/99-Credits.svelte";

  const dateTransformer = (inputDate) => {
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
      "dic",
    ];
    return `${dia} ${arrayMeses[mes - 1]}. ${
      año == new Date().getFullYear() ? "" : año
    }`;
  };
</script>

<style>
  .post-card {
    background: white;
    min-height: 8vh;
  }

  .intro {
    margin-top: 6rem;
  }
</style>

<svelte:head>
  <title>Ant Hill: | {post.title}</title>
  <meta property="og:url" content={`www.ant-hill.org/blog/${post.permalink}`} />
  <meta property="og:title" content={`${post.title} - Ant Hill`} />
  <meta property="og:description" content={post.description} />

  <meta name="description" content={post.description} />
</svelte:head>
<NavHorizontal showSearchBar={false} />
<main class="sections">
  <div class=" center post-card w-70-ns w-90-m w-100 shadow-4 br3 mt3">
    <!-- display the post -->
    <div class=" mb0 ph3 pt3 intro">
      <h1 class="f4-m f3-l f4-ns f5">{post.title}</h1>
      <h3 class="tl w-90 f5-m f4-l f5-ns f5">{post.description}</h3>
      <p class=" ma1 pb2 pt2 pr2 tr f6 gray lh-copy courier">
        {dateTransformer(post.date)}
      </p>
    </div>
  </div>

  <div class="center w-90-l w-100-m w-100 br3 pt4 bt-grey">
    {@html post.html}
  </div>
</main>

<Credits />
