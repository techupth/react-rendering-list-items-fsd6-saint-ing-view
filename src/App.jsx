import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {movies.map((item, index) => (
          <div key={index}>
            <li>
              <img src={item.image} className="imgMovie" />
            </li>
            <li>title: {item.title}</li>
            <li>year: {item.year}</li>
            <li>runtime: {item.runtime}</li>
            <li>director: {item.director}</li>
            <li>genres: {item.genres}</li>
            <li>imdbRating: {item.imdbRating}</li>
            <li>imdbVotes: {item.imdbVotes}</li>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
