import view from "../view/view.js";
import Story from "../comp/Story.js";
import store from "../store.js";
import checkFavorite from "../starred.js";

export default async function Stories(path) {
  const { favorites } = store.getState();
  const stories = await getStories(path);
  const hasStories = stories.length > 0;

  view.innerHTML = `<div>
  ${
    hasStories
      ? stories
          .map((story, i) =>
            Story({
              ...story,
              index: i + 1,
              isFavorite: checkFavorite(favorites, story),
            })
          )
          .join("")
      : "No stories"
  }
</div>`;

  document.querySelectorAll(".favorite").forEach((favoriteButton) => {
    favoriteButton.addEventListener("click", async function () {
      const story = JSON.parse(this.dataset.story);
      const isFavorited = checkFavorite(favorites, story);
      store.dispatch({
        type: isFavorited ? "REMOVE_FAVORITE" : "ADD_FAVORITE",
        payload: { favorite: story },
      });
      await Stories(path);
    });
  });
}

export let stories = [];
async function getStories(path) {
  const isHomePage = path === "/";
  const isNewPage = path === "/new";
  if (isHomePage) {
    path = "/news";
  } else if (isNewPage) {
    path - "/newest";
  }

  const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);
  stories = await response.json();
  return stories;
}
