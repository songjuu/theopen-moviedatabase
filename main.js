let page = 1;
const key = "e927a28b082f830a43af699d4d3f96b0";
//중복되는 url 상수로 설정하기
const base_url = "https://image.tmdb.org/t/p/w500/";
const cardlist = document.querySelector(".cardlist");

//API 서버에서 데이터 가져오는 함수
function fetchMovie(page) {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`;

  fetch(url)
    .then((res) => res.json())
    .then(function (res) {
      const movies = res.results;
      // console.log(movies);

      //map() 리턴 값 존재, forEach() 리턴 값 존재 x
      movies.map(function (movie) {
        // console.log(movie.id);
        const div = document.createElement("div");
        // div.classList.add("list");
        const output = `
																	<div class="post-entry-alt" onclick="openView(${movie.id})">
																		<a class="img-link"><img src="${
                                      base_url + movie.poster_path
                                    }" alt="Image" class="img-fluid"></a>
																		<div class="excerpt">
																			<h2>${movie.title}</h2>
																		<div class="post-meta align-items-center text-left clearfix">
																			<span class="d-inline-block mt-1">평점</span>
																			<span>${movie.vote_average}</span>
																		</div>
																		<p class="ov-movie">${movie.overview}</p>
																		<p>개봉일: ${movie.release_date}</p>
																		</div>
																	</div>
																`;
        //div에 output으로 변경
        div.innerHTML = output;
        //append()와 다르게 오직 node 객체만 받을 수 있음
        //오직 하나의 노드만 추가, DOMstring 넣을 경우 에러 발생
        cardlist.appendChild(div);
        //div 엘리먼트에 data-id 속성 추가, 속성 값은 movie.id
        div.setAttribute("data-id", movie.id);
      });
    })
    //error 발생시
    .catch((erro) => console.log(erro));
}

//alert 창에 id 값 띄움
function openView(id) {
  alert(id);
}

//윈도우 로드시 기본으로 한번 함수 실행함.
window.addEventListener("onLoad", fetchMovie());
