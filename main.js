//검색기능, search함수 event
const Search = (event) => {
  event.preventDefault(); //이벤트를 처리하지 않은 경우, 기본 동작 실행하지 않도록 함.
  const searchInput = document.querySelector("#searchInput");

  const searchKeyword = searchInput.value.toLowerCase(); //
  // console.log(searchKeyword);
  const movieCards = document.querySelectorAll(".movie-card");

  movieCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    // console.log(title);
    // 지정된 요소를 찾을 수 있는데 인덱스 반환 후 존재하지 않으면 -1 반환.
    if (title.indexOf(searchKeyword) !== -1) {
      card.style.display = "block";
    } else {
      card.style.display = "none"; //검색한거말고는 none 처리.
    }
  });
};

const key = "e927a28b082f830a43af699d4d3f96b0";
//중복되는 url 상수로 설정하기
const base_url = "https://image.tmdb.org/t/p/w500/";
const cardlist = document.querySelector(".cardlist");

//API 서버에서 데이터 가져오는 함수, 카드 UI 구현
function fetchMovie(page) {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en&page=1`;

  fetch(url)
    .then((res) => res.json())
    .then(function (res) {
      const movies = res.results;
      // console.log(movies);

      movies.map(function (movie) {
        // console.log(movie.id);
        const div = document.createElement("div");
        div.classList.add("movie-card");
        const output = `<div class="card" onclick="openView(${
          movie.id
        })" style="width: 25rem;">
                            <img src="${
                              base_url + movie.poster_path
                            }" class="card-img-top" alt="Image">
                            <div class="card-body">
                              <h3 class="card-title">${movie.title}</h3>
                              <p class="card-text">${movie.overview}</p>
                              <p class="star">평점 ${movie.vote_average}</p>
                              <p>개봉일: ${movie.release_date}</p>
                            </div>
                          </div>`;

        //div에 output 넣기
        div.innerHTML = output;
        //append()와 다르게 오직 node 객체만 받을 수 있음
        //appendhild()오직 하나의 노드만 추가, DOMstring 넣을 경우 에러 발생
        cardlist.appendChild(div);
        //div 엘리먼트에 data-id 속성 추가, 속성 값은 movie.id
        div.setAttribute("data-id", movie.id);
      });
    })
    //error 발생시
    .catch((erro) => console.log(erro));
}

//alert 창에 id 값 띄움.
function openView(id) {
  // console.log(id);
  alert(`영화 ID: ${id}`);
}

//검색 초기화 기능
function reload() {
  window.location.reload();
}

//페이지 최상단 가기
function clickme() {
  window.scrollTo(0, 0);
}

//윈도우 로드시 기본으로 한번 함수 실행
window.addEventListener("onLoad", fetchMovie());
