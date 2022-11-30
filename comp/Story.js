export default function Story(story) {
  console.log(story);
  return `
  <div class="story">
  <div class="emi">
  <div> 
  <img src=${story.image}
      <span class="gray index">${story.index || ""}</span>
      <a id="bar" href="${story.url}">${story.title}</a>
    </div>
    <div>
      <div class="gray">
        ${story.points} points  | by ${story.user}  | ${story.time_ago}
        |   <span>(${story.domain})</span> 
        <div class="right">
         <a href="#/item?id=${story.id}">
          ${story.comments_count} comments
        </a>
        <img class="share" src="imgs/share-logo.png">
        <span class="favorite gray" data-story='${JSON.stringify(story)}'>
          <img class="star" src="imgs/star-logo.png">
          ${story.isFavorite ? "Remove From Favorites" : "Add To Favorites"}
        </span>
        </div>
       
      </div>
    </div>
  </div>
  </div>
    
`;
}
