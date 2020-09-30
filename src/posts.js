import _ from "lodash";
import all from "../posts/*.md";

export const posts = _.chain(all) // begin a chain
  .map(transform) // transform the shape of each post
  .value(); // convert chain back to array

// function for reshaping each post
function transform({ filename, html, metadata }) {
  // the permalink is the filename with the '.md' ending removed
  const permalink = filename.replace(/\.md$/, "");

  const date = metadata.date;

  // return the new shape
  return { ...metadata, filename, html, permalink, date };
}

// provide a way to find a post by permalink
export function findPost(permalink) {
  // use lodash to find by field name:
  return _.find(posts, { permalink });
}