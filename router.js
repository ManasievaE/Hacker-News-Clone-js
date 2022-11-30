import Stories from "./pages/stories.js";
import Item from "./pages/item.js";
import Favorites from "./pages/favorites.js";

const router = new Navigo(null, true, "#");

export default class RouterClass {
  constructor() {
    this.createRoutes();
  }

  createRoutes() {
    const routes = [
      { path: "/", page: Stories },
      { path: "/newest", page: Stories },
      { path: "/show", page: Stories },
      { path: "/ask", page: Stories },
      { path: "/polls", page: Stories },
      { path: "/jobs", page: Stories },
      { path: "/starred", page: Favorites },
      { path: "/item", page: Item },
    ];

    routes.forEach(({ path, page }) => {
      router
        .on(path, () => {
          page(path);
        })
        .resolve();
    });
  }
}
