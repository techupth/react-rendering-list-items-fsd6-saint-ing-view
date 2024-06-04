/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        {movies.map((item, index) => {
          return (
            <div
              key={index}
              css={css`
                border-radius: 10px;
                width: 400px;
                height: 250px;
                background: #ffffff;
                font-size: 20px;
                font-weight: 700;
                color: #444444;
                display: flex;
                flex-direction: row;
                gap: 10px;
                margin-top: 50px;
                margin-left: 50px;
              `}
            >
              <div css={css``}>
                <img
                  src={item.image}
                  css={css`
                    border-radius: 10px;
                    width: 102px;
                    height: 100px;
                    margin-top: 10px;
                    margin-left: 10px;
                  `}
                />
              </div>
              <div
                css={css`
                  margin-top: 10px;
                `}
              >
                Title:{item.title}
                <br />
                Year:{item.year}
                <br />
                Runtime:{item.runtime}
                <br />
                Genres:
                <div>{item.genres}</div>
                <br />
                IMDB Ratings: {item.imdbRating}
                <br />
                IMDB Votes: {item.imdbVotes}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
