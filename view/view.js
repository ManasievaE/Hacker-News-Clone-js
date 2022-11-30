import Story from "../comp/Story.js";
import { stories } from "../pages/stories.js";
export default document.querySelector("ul");

var searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", searchBar);

function searchBar() {
  var filter = searchInput.value.toUpperCase();
  var el = document.getElementsByClassName("emi");

  for (var i = 0; i < el.length; i++) {
    var a = el[i].getElementsByTagName("a")[0];
    var txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      el[i].style.display = "";
    } else {
      el[i].style.display = "none";
    }
  }
}
const popularity = document.getElementById("popular");
popularity.addEventListener("click", () => {
  var mostPopular = stories.sort(function (a, b) {
    return b.points - a.points;
  });
  console.log(mostPopular);
  var listHtml = "";
  mostPopular.forEach((story) => {
    listHtml = listHtml + Story(story);
  });
  document.querySelector("ul").innerHTML = listHtml;
});

const date = document.getElementById("date");
date.addEventListener("click", () => {
  var dateSorted = stories.sort(function (a, b) {
    return new Date(b.time) - new Date(a.time);
  });
  console.log(dateSorted);
  var listHtml = "";
  dateSorted.forEach((story) => {
    listHtml = listHtml + Story(story);
  });
  document.querySelector("ul").innerHTML = listHtml;
});

var now = new Date();
var nowUtc =
  Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds()
  ) / 1000;
console.log(nowUtc);

const radioButtons = document.querySelectorAll('input[name="radio-button"]');
for (const radioButton of radioButtons) {
  radioButton.addEventListener("change", radioBtn);
}

function radioBtn() {
  const radio24 = document.getElementById("24h");
  const radioWeek = document.getElementById("week");
  const radioMonth = document.getElementById("month");
  const radioForever = document.getElementById("forever");
  const pastHours = nowUtc - 24 * 60 * 60;
  const pastWeek = nowUtc - 7 * 24 * 60 * 60;
  const pastMonth = nowUtc - 30 * 24 * 60 * 60;
  var listHtml = "";
  if (radio24.checked) {
    var past_24h = stories.filter((story) => {
      return story.time <= pastHours;
    });
    console.log(past_24h);
    past_24h.forEach((story) => {
      listHtml = listHtml + Story(story);
    });
    document.querySelector("ul").innerHTML = listHtml;
  } else if (radioWeek.checked) {
    var past_week = stories.filter((story) => {
      return story.time >= pastWeek;
    });
    console.log(past_week);
    past_week.forEach((story) => {
      listHtml = listHtml + Story(story);
    });
    document.querySelector("ul").innerHTML = listHtml;
  } else if (radioMonth.checked) {
    var past_month = stories.filter((story) => {
      return story.time >= pastMonth;
    });
    console.log(past_month);
    past_month.forEach((story) => {
      listHtml = listHtml + Story(story);
    });
    document.querySelector("ul").innerHTML = listHtml;
  } else if (radioForever.checked) {
    stories.forEach((story) => {
      listHtml = listHtml + Story(story);
    });
    document.querySelector("ul").innerHTML = listHtml;
  }
}
