const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTI3YTI4YjA4MmY4MzBhNDNhZjY5OWQ0ZDNmOTZiMCIsInN1YiI6IjY0NzU4NDA3YzI4MjNhMDBjNDIxN2YyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zH3dakC2iKv-HAauGNPGwg-tC6wfvBv9C21tSk_SpcU",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
