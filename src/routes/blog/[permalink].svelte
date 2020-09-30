<script context="module">
  import Title from "./../../components/1-Title.svelte";
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
  // this prop is filled from the result of the `preload()`
  export let post;

  import Credits from "./../../components/99-Credits.svelte";
</script>

<svelte:head>
  <title>Blog | {post.title}</title>
  <meta property="og:title" content={post.title} />
  <meta name="description" content={post.description} />

  <meta property="og:description" content={post.description} />
</svelte:head>

<main class="sections">

  <Title />
  <!-- display the post -->
  <h1>{post.title}</h1>

  {@html post.html}

</main>

<Credits />
