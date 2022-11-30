import view from "../view/view.js";
import Story from "../comp/Story.js";
import Comment from "../comp/Comment.js";

export default async function Item() {
  let story = await getStory();
  let hasComments = story.comments.length > 0;

  view.innerHTML = `
  <div>
    ${Story(story)}
  </div>
  <hr/>
  ${
    hasComments
      ? story.comments.map((comment) => Comment(comment)).join("")
      : "No comments"
  }
  `;
}

async function getStory() {
  const storyId = window.location.hash.split("?id=")[1];
  const response = await fetch(
    `https://node-hnapi.herokuapp.com/item/${storyId}`
  );
  const story = await response.json();
  return story;
}
