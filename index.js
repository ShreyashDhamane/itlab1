import { sitcoms } from "./data.js";

let sitcomListElement = document.getElementById("sitcom-list");
for (let i = 0; i < sitcoms.length; i++) {
  var li = document.createElement("li");
  li.innerText = i + 1 + "." + sitcoms[i].title;
  li.classList.add("list-item");
  sitcomListElement.appendChild(li);
}
sitcomListElement.firstChild.classList.add("border-color-class");
let sitcomTitle = document.getElementById("sitcom-title");
let sitcomeTitleLink = document.getElementById("sitcom-title-link");
let sitcomWatchNumber = document.getElementById("sitcom-watch-number");
let sitcomImage = document.getElementById("sitcom-img");
let sitcomTrailer = document.getElementById("sitcom-trailer");
let sitcomDesc = document.getElementById("sitcom-desc");
let sitcomCast = document.getElementById("cast");
let sitcomeCastAnchorTag = document.getElementById("sitcom-cast-anchor-tag");

sitcomTitle.innerText = sitcoms[0].title;
sitcomTrailer.src = sitcoms[0].trailerUrl;
sitcomDesc.innerText = sitcoms[0].desc;
sitcomeTitleLink.href = sitcoms[0].sitcomWikiUrl;
sitcomImage.src = sitcoms[0].imageUrl;
for (let i = 0; i < sitcoms[0].cast.length; i++) {
  let article = document.createElement("article");
  let a = document.createElement("a");
  let img = document.createElement("img");
  let h3 = document.createElement("h3");
  let h4 = document.createElement("h4");

  sitcomeCastAnchorTag.href = sitcoms[0].castUrl;
  img.src = sitcoms[0].cast[i].image;
  a.appendChild(img);
  a.href = sitcoms[0].cast[i].url;
  h3.innerText = sitcoms[0].cast[i].name;
  h3.classList.add("text");
  h4.innerText = sitcoms[0].cast[i].showName;
  h4.classList.add("sub-text");
  article.appendChild(a);
  article.appendChild(h3);
  article.appendChild(h4);
  sitcomCast.appendChild(article);
}

let listItems = document.querySelectorAll("li");

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", () => {
    deleteChild();
    adjustBorderColorClass(i);
    sitcomTitle.innerText = sitcoms[i].title;
    sitcomTrailer.src = sitcoms[i].trailerUrl;
    sitcomDesc.innerText = sitcoms[i].desc;
    sitcomeTitleLink.href = sitcoms[i].sitcomWikiUrl;
    sitcomImage.src = sitcoms[i].imageUrl;
    for (let j = 0; j < sitcoms[i].cast.length; j++) {
      let article = document.createElement("article");
      let a = document.createElement("a");
      let img = document.createElement("img");
      let h3 = document.createElement("h3");
      let h4 = document.createElement("h4");

      sitcomeCastAnchorTag.href = sitcoms[i].castUrl;
      img.src = sitcoms[i].cast[j].image;
      a.appendChild(img);
      a.href = sitcoms[i].cast[j].url;
      h3.innerText = sitcoms[i].cast[j].name;
      h3.classList.add("text");
      h4.innerText = sitcoms[i].cast[j].showName;
      h4.classList.add("sub-text");
      article.appendChild(a);
      article.appendChild(h3);
      article.appendChild(h4);
      sitcomCast.appendChild(article);
    }
  });
}

function deleteChild() {
  //e.firstElementChild can be used.
  var child = sitcomCast.lastElementChild;
  while (child) {
    sitcomCast.removeChild(child);
    child = sitcomCast.lastElementChild;
  }
}

function adjustBorderColorClass(childNumber) {
  let list = sitcomListElement.childNodes;
  for (let i = 0; i < list.length; i++) {
    if (list[i].classList.contains("border-color-class")) {
      list[i].classList.remove("border-color-class");
      break;
    }
  }
  list[childNumber].classList.add("border-color-class");
}
