import _ from "lodash";
import all from "../posts/*.md";

export const posts = _.chain(all) // begin a chain
  .map(transform) // transform the shape of each post
  .value(); // convert chain back to array

// function for reshaping each post
function transform({ filename, html, metadata }) {
  // the permalink is the filename with the '.md' ending removed
  const permalink = filename.replace(/\.md$/, "");

  const description = metadata.description ? metadata.description : "";

  

  // return the new shape
  return { ...metadata, filename, html, description, permalink };
}

// provide a way to find a post by permalink
export function findPost(permalink) {
  // use lodash to find by field name:
  return _.find(posts, { permalink });
}
