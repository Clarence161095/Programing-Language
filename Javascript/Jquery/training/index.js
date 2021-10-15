var newsGetAllAPI = "http://192.168.1.7:5000/news";

function start() {
  getNews(renderNews);
}

start();

function getNews(callback) {
  fetch(newsGetAllAPI)
    .then((response) => {
      return response.json();
    })
    .then(callback);
}

function renderNews(news) {
  var listNewsBlock = document.querySelector("#list-group");
  console.log(news);
  var html = news['news'].map((element) => {
    return `
    <li class="list-group-item">
        <h4>${element.subject}</h4>
        <img src="${element.image}" alt="${element.subject}">
        <p>${element.description}</p>
    </li>
      `;
  });
  listNewsBlock.innerHTML = html.join("");
}
